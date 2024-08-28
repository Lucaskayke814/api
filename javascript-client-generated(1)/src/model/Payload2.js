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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Sei) {
      root.Sei = {};
    }
    root.Sei.Payload2 = factory(root.Sei.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Payload2 model module.
   * @module model/Payload2
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Payload2</code>.
   * @alias module:model/Payload2
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Payload2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Payload2} obj Optional instance to populate.
   * @return {module:model/Payload2} The populated <code>Payload2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('siglaSistema'))
        obj.siglaSistema = ApiClient.convertToType(data['siglaSistema'], 'String');
      if (data.hasOwnProperty('identificacaoServico'))
        obj.identificacaoServico = ApiClient.convertToType(data['identificacaoServico'], 'String');
      if (data.hasOwnProperty('idUnidade'))
        obj.idUnidade = ApiClient.convertToType(data['idUnidade'], 'String');
      if (data.hasOwnProperty('protocoloProcedimento'))
        obj.protocoloProcedimento = ApiClient.convertToType(data['protocoloProcedimento'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} siglaSistema
   */
  exports.prototype.siglaSistema = undefined;

  /**
   * @member {String} identificacaoServico
   */
  exports.prototype.identificacaoServico = undefined;

  /**
   * @member {String} idUnidade
   */
  exports.prototype.idUnidade = undefined;

  /**
   * @member {String} protocoloProcedimento
   */
  exports.prototype.protocoloProcedimento = undefined;


  return exports;
}));
