=begin
#Assessment Network Interactions API

#Records interactions with content distributed by the Assessment Network.  Requests to this API should include `application/json` in the `Accept` header.  The desired API version is specified in the request URL, e.g. `...a15k.org/v0/flags`.          While the API does support a default version, that version will change over          time and therefore should not be used in production code!  Some endpoints require an API key to be passed in the request header.  There are two          types of API keys: API tokens and API IDs.  An API token is used for more restricted          access.  Such tokens should not be shared with end users.  API IDs are used for less          restricted access and may be exposed to clients (e.g. through use in browser-side code).          Both keys are available to members through www.a15k.org. 

OpenAPI spec version: 0.1.0

Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.3.1

=end

require 'spec_helper'
require 'json'

# Unit tests for A15kInteractions::AppsApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'AppsApi' do
  before do
    # run before each test
    @instance = A15kInteractions::AppsApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of AppsApi' do
    it 'should create an instance of AppsApi' do
      expect(@instance).to be_instance_of(A15kInteractions::AppsApi)
    end
  end

  # unit tests for create_app
  # Create a new app
  # Create a new app with some values pre-populated; does not take initial values
  # @param [Hash] opts the optional parameters
  # @option opts [String] :group_id ID under which the new app should be grouped (e.g. the UUID) of the app owner.  Can be used to later retrieve all apps in the same group at once.
  # @return [App]
  describe 'create_app test' do
    it "should work" do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_app
  # Delete an app
  # Delete the specified app
  # @param id ID of the app to delete
  # @param [Hash] opts the optional parameters
  # @return [App]
  describe 'delete_app test' do
    it "should work" do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_app
  # Get a specific app
  # Returns all information about a specific app
  # @param id ID of the app
  # @param [Hash] opts the optional parameters
  # @return [App]
  describe 'get_app test' do
    it "should work" do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_apps
  # Get all apps matching a query
  # Get all apps matching a query.
  # @param [Hash] opts the optional parameters
  # @option opts [String] :group_id ID under which apps are grouped (e.g. the UUID) of the app owner.If not provided, returns all apps.
  # @return [Array<App>]
  describe 'get_apps test' do
    it "should work" do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_app
  # Update an app
  # Update an app with the provided values.
  # @param id ID of the app
  # @param [Hash] opts the optional parameters
  # @option opts [AppUpdate] :app The app data
  # @return [App]
  describe 'update_app test' do
    it "should work" do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
