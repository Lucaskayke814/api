/*
 * SEI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.42
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Payload', 'model/Payload1', 'model/Payload2', 'model/Payload3', 'model/Payload4', 'model/Payload5', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Payload'), require('./model/Payload1'), require('./model/Payload2'), require('./model/Payload3'), require('./model/Payload4'), require('./model/Payload5'), require('./api/DefaultApi'));
  }
}(function(ApiClient, Payload, Payload1, Payload2, Payload3, Payload4, Payload5, DefaultApi) {
  'use strict';

  /**
   * Object.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Sei = require('index'); // See note below*.
   * var xxxSvc = new Sei.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Sei.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Sei.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Sei.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Payload model constructor.
     * @property {module:model/Payload}
     */
    Payload: Payload,
    /**
     * The Payload1 model constructor.
     * @property {module:model/Payload1}
     */
    Payload1: Payload1,
    /**
     * The Payload2 model constructor.
     * @property {module:model/Payload2}
     */
    Payload2: Payload2,
    /**
     * The Payload3 model constructor.
     * @property {module:model/Payload3}
     */
    Payload3: Payload3,
    /**
     * The Payload4 model constructor.
     * @property {module:model/Payload4}
     */
    Payload4: Payload4,
    /**
     * The Payload5 model constructor.
     * @property {module:model/Payload5}
     */
    Payload5: Payload5,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));