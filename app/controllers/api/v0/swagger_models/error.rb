module Api::V0::SwaggerModels::Error
  include Swagger::Blocks
  include SwaggerBlocksExtensions

  swagger_schema :Error do
    property :status_code do
      key :type, :integer
      key :description, "The HTTP status code"
    end
    property :messages do
      key :type, :array
      key :description, "The error messages, if any"
      items do
        key :type, :string
      end
    end
  end
end
