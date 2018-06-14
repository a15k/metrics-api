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
    root.A15kInteractions.AppUpdate = factory(root.A15kInteractions.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AppUpdate model module.
   * @module A15kInteractions/AppUpdate
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>AppUpdate</code>.
   * @alias module:A15kInteractions/AppUpdate
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AppUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:A15kInteractions/AppUpdate} obj Optional instance to populate.
   * @return {module:A15kInteractions/AppUpdate} The populated <code>AppUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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


