/**
 * Assessment Network Interactions API
 * Records interactions with content distributed by the Assessment Network.  Requests to this API should include `application/json` in the `Accept` header.  The desired API version is specified in the request URL, e.g. `...a15k.org/v0/flags`.          While the API does support a default version, that version will change over          time and therefore should not be used in production code!  Some endpoints require an API key to be passed in the request header.  There are two          types of API keys: API tokens and API IDs.  An API token is used for more restricted          access.  Such tokens should not be shared with end users.  API IDs are used for less          restricted access and may be exposed to clients (e.g. through use in browser-side code).          Both keys are available to members through www.a15k.org. 
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'A15kInteractions/Error', 'A15kInteractions/Presentation', 'A15kInteractions/PresentationResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../A15kInteractions/Error'), require('../A15kInteractions/Presentation'), require('../A15kInteractions/PresentationResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.A15kInteractions) {
      root.A15kInteractions = {};
    }
    root.A15kInteractions.PresentationsApi = factory(root.A15kInteractions.ApiClient, root.A15kInteractions.Error, root.A15kInteractions.Presentation, root.A15kInteractions.PresentationResponse);
  }
}(this, function(ApiClient, Error, Presentation, PresentationResponse) {
  'use strict';

  /**
   * Presentations service.
   * @module api/PresentationsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new PresentationsApi. 
   * @alias module:api/PresentationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Indicate that content was presented
     * Called when network content is presented to any end user
     * @param {module:A15kInteractions/Presentation} presentation The presentation data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:A15kInteractions/PresentationResponse} and HTTP response
     */
    this.createPresentationWithHttpInfo = function(presentation) {
      var postBody = presentation;

      // verify the required parameter 'presentation' is set
      if (presentation === undefined || presentation === null) {
        throw new Error("Missing the required parameter 'presentation' when calling createPresentation");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_id'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PresentationResponse;

      return this.apiClient.callApi(
        '/presentations', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Indicate that content was presented
     * Called when network content is presented to any end user
     * @param {module:A15kInteractions/Presentation} presentation The presentation data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:A15kInteractions/PresentationResponse}
     */
    this.createPresentation = function(presentation) {
      return this.createPresentationWithHttpInfo(presentation)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
