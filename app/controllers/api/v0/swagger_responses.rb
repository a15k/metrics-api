module Api::V0::SwaggerResponses
  module AuthenticationError
    def self.extended(base)
      base.response 401 do
        key :description, 'Not authorized'
      end
    end
  end

  module ForbiddenError
    def self.extended(base)
      base.response 403 do
        key :description, 'Forbidden'
      end
    end
  end

  module NotFoundError
    def self.extended(base)
      base.response 404 do
        key :description, 'Not found'
      end
    end
  end

  module UnprocessableEntityError
    def self.extended(base)
      base.response 422 do
        key :description, 'Could not process request'
        schema do
          key :'$ref', :Error
        end
      end
    end
  end

  module ServerError
    def self.extended(base)
      base.response 500 do
        key :description, 'Server error.'
        schema do
          key :'$ref', :Error
        end
      end
    end
  end
end