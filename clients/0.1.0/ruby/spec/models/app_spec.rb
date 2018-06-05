=begin
#Assessment Network Interactions API

#> Records interactions with content distributed by the Assessment Network  Requests to this API should include `application/json` in the `Accept` header.  The desired API version is specified in the request URL, e.g. `...a15k.org/v0/flags`. While the API does support a default version, that version will change over time and therefore should not be used in production code!  Some endpoints require an API key to be passed in the request header.  There are two types of API keys: API tokens and API IDs.  An API token is used for more restricted access.  Such tokens should not be shared with end users.  API IDs are used for less restricted access and may be exposed to clients (e.g. through use in browser-side code).  Both keys are available to members through www.a15k.org. 

OpenAPI spec version: 0.1.0

Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.3.1

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for A15k::Interactions::App
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'App' do
  before do
    # run before each test
    @instance = A15k::Interactions::App.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of App' do
    it 'should create an instance of App' do
      expect(@instance).to be_instance_of(A15k::Interactions::App)
    end
  end
  describe 'test attribute "id"' do
    it 'should work' do
       # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "api_id"' do
    it 'should work' do
       # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "api_token"' do
    it 'should work' do
       # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "group_id"' do
    it 'should work' do
       # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "name"' do
    it 'should work' do
       # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "whitelisted_domains"' do
    it 'should work' do
       # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end

