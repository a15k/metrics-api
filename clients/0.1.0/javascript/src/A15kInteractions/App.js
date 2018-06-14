/**
 * Assessment Network Interactions API
 * Records interactions with content distributed by the Assessment Network.  Requests to this API should include `application/json` in the `Accept` header.  The desired API version is specified in the request URL, e.g. `...a15k.org/v0/flags`.          While the API does support a default version, that version will change over          time and therefore should not be used in production code!  Some endpoints require an API key to be passed in the request header.  There are two          types of API keys: API tokens and API IDs.  An API token is used for more restricted          access.  Such tokens should not be shared with end users.  API IDs are used for less          restricted access and may be exposed to clients (e.g. through use in browser-side code).          Both keys are available to members through www.a15k.org. 
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.A15kInteractions) {
      root.A15kInteractions = {};
    }
    root.A15kInteractions.App = factory(root.A15kInteractions.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The App model module.
   * @module A15kInteractions/App
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>App</code>.
   * @alias module:A15kInteractions/App
   * @class
   * @param id {String} Internally-set ID
   * @param apiId {String} Used to identify the app in unsecured API requests
   * @param apiToken {String} Used to identify the app in secured API requests, normally as part of the HTTP header
   * @param name {String} Custom name set by app owner to help them manage apps
   */
  var exports = function(id, apiId, apiToken, name) {
    var _this = this;

    _this['id'] = id;
    _this['api_id'] = apiId;
    _this['api_token'] = apiToken;

    _this['name'] = name;

  };

  /**
   * Constructs a <code>App</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:A15kInteractions/App} obj Optional instance to populate.
   * @return {module:A15kInteractions/App} The populated <code>App</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('api_id')) {
        obj['api_id'] = ApiClient.convertToType(data['api_id'], 'String');
      }
      if (data.hasOwnProperty('api_token')) {
        obj['api_token'] = ApiClient.convertToType(data['api_token'], 'String');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('whitelisted_domains')) {
        obj['whitelisted_domains'] = ApiClient.convertToType(data['whitelisted_domains'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Internally-set ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Used to identify the app in unsecured API requests
   * @member {String} api_id
   */
  exports.prototype['api_id'] = undefined;
  /**
   * Used to identify the app in secured API requests, normally as part of the HTTP header
   * @member {String} api_token
   */
  exports.prototype['api_token'] = undefined;
  /**
   * Used to group apps
   * @member {String} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * Custom name set by app owner to help them manage apps
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * List of domains that should be allowed to make cross-origin AJAX requests
   * @member {Array.<String>} whitelisted_domains
   */
  exports.prototype['whitelisted_domains'] = undefined;



  return exports;
}));


