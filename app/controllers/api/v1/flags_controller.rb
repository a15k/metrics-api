class Api::V1::FlagsController < Api::V1::BaseController
  include Swagger::Blocks

  before_action :authenticate_api_id_and_domain
  before_action :get_flag, only: [:show, :update, :destroy]

  swagger_path '/flags' do
    operation :post do
      key :summary, 'Flag some content'
      key :description, 'Adds a flag to some content for some user in some app.'
      key :operationId, 'createFlag'
      key :tags, [
        'Flags'
      ]
      security do
        key :api_id, []
      end
      parameter do
        key :name, :flag
        key :in, :body
        key :description, 'The flag data'
        key :required, true
        schema do
          key :'$ref', :Flag
        end
      end
      response 200 do
        key :description, 'Success.  Returns the created flag.'
        schema do
          key :'$ref', :Flag
        end
      end
      extend Api::V1::SwaggerResponses::AuthenticationError
      extend Api::V1::SwaggerResponses::ForbiddenError
      extend Api::V1::SwaggerResponses::ServerError
    end
  end

  def create
    binding, error = bind(params[:flag], Api::V1::Bindings::Flag)

    render(json: error, status: error.status_code) and return if error

    flag = Flag.create(app_api_id: api_id,
                       source_domain: origin,
                       content_uid: binding.content_uid,
                       variant_id: binding.variant_id,
                       user_uid: binding.user_uid,
                       type: binding.type,
                       explanation: binding.explanation)

    render json: to_json(flag), status: :created
  end

  swagger_path '/flags/{id}' do
    operation :get do
      key :summary, 'Retrieve a flag'
      key :description, 'Retrieve a flag.  Anyone with the flag ID (very hard to guess) can retrieve it.'
      key :operationId, 'getFlag'
      key :tags, [
        'Flags'
      ]
      security do
        key :api_id, []
      end
      parameter do
        key :name, :id
        key :in, :path
        key :description, 'ID of the flag to retrieve'
        key :required, true
        key :type, :string
      end
      response 200 do
        key :description, 'Success.  Returns the requested flag.'
        schema do
          key :'$ref', :Flag
        end
      end
      extend Api::V1::SwaggerResponses::AuthenticationError
      extend Api::V1::SwaggerResponses::ForbiddenError
      extend Api::V1::SwaggerResponses::NotFoundError
      extend Api::V1::SwaggerResponses::ServerError
    end
  end

  def show
    render json: to_json(@flag), status: :created
  end

  swagger_path '/flags' do
    operation :put do
      key :summary, 'Update a flag'
      key :description, 'Update a flag with the provided values.'
      key :operationId, 'updateFlag'
      security do
        key :api_id, []
      end
      key :tags, [
        'Flags'
      ]
      parameter do
        key :name, :id
        key :in, :path
        key :description, 'ID of the flag'
        key :required, true
        key :type, :string
      end
      parameter do
        key :name, :flag
        key :in, :body
        key :description, 'The flag data'
        schema do
          key :'$ref', :Flag
        end
      end
      response 200 do
        key :description, 'Success.  Returns the updated flag.'
        schema do
          key :'$ref', :Flag
        end
      end
      extend Api::V1::SwaggerResponses::AuthenticationError
      extend Api::V1::SwaggerResponses::ForbiddenError
      extend Api::V1::SwaggerResponses::NotFoundError
      extend Api::V1::SwaggerResponses::ServerError
    end
  end

  def update
    binding, error = bind(@flag.to_hash.merge(params[:flag]), Api::V1::Bindings::Flag)

    render(json: error, status: error.status_code) and return if error

    @flag.update(type: binding.type, explanation: binding.explanation)

    render json: to_json(@flag), status: :success
  end

  swagger_path '/flags/{id}' do
    operation :delete do
      key :summary, 'Delete a flag'
      key :description, 'Delete a flag.  Anyone with the flag ID (very hard to guess) can delete it.'
      key :operationId, 'deleteFlag'
      key :tags, [
        'Flags'
      ]
      security do
        key :api_id, []
      end
      parameter do
        key :name, :id
        key :in, :path
        key :description, 'ID of the flag to delete'
        key :required, true
        key :type, :string
      end
      response 200 do
        key :description, 'Success.  Returns the deleted flag.'
        schema do
          key :'$ref', :Flag
        end
      end
      extend Api::V1::SwaggerResponses::AuthenticationError
      extend Api::V1::SwaggerResponses::ForbiddenError
      extend Api::V1::SwaggerResponses::NotFoundError
      extend Api::V1::SwaggerResponses::ServerError
    end
  end

  def destroy
    @flag.destroy
    render json: to_json(@flag), status: :created
  end

  protected

  def get_flag
    @flag = Flag.find(params[:id])
    return head(:not_found) if @flag.nil?
  end

  def to_json(flag)
    Api::V1::Bindings::Flag.new(
      id: flag.id,
      content_uid: flag.content_uid,
      variant_id: flag.variant_id,
      user_uid: flag.user_uid,
      type: flag.type,
      explanation: flag.explanation
    ).to_json
  end

end
