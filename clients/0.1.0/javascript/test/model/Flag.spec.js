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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.A15kInteractions);
  }
}(this, function(expect, A15kInteractions) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new A15kInteractions.Flag();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Flag', function() {
    it('should create an instance of Flag', function() {
      // uncomment below and update the code to test Flag
      //var instane = new A15kInteractions.Flag();
      //expect(instance).to.be.a(A15kInteractions.Flag);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new A15kInteractions.Flag();
      //expect(instance).to.be();
    });

    it('should have the property contentUid (base name: "content_uid")', function() {
      // uncomment below and update the code to test the property contentUid
      //var instane = new A15kInteractions.Flag();
      //expect(instance).to.be();
    });

    it('should have the property variantId (base name: "variant_id")', function() {
      // uncomment below and update the code to test the property variantId
      //var instane = new A15kInteractions.Flag();
      //expect(instance).to.be();
    });

    it('should have the property userUid (base name: "user_uid")', function() {
      // uncomment below and update the code to test the property userUid
      //var instane = new A15kInteractions.Flag();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new A15kInteractions.Flag();
      //expect(instance).to.be();
    });

    it('should have the property explanation (base name: "explanation")', function() {
      // uncomment below and update the code to test the property explanation
      //var instane = new A15kInteractions.Flag();
      //expect(instance).to.be();
    });

  });

}));
