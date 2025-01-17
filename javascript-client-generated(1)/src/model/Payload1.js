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
    root.Sei.Payload1 = factory(root.Sei.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Payload1 model module.
   * @module model/Payload1
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Payload1</code>.
   * @alias module:model/Payload1
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Payload1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Payload1} obj Optional instance to populate.
   * @return {module:model/Payload1} The populated <code>Payload1</code> instance.
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
      if (data.hasOwnProperty('tipo'))
        obj.tipo = ApiClient.convertToType(data['tipo'], 'String');
      if (data.hasOwnProperty('idProcedimento'))
        obj.idProcedimento = ApiClient.convertToType(data['idProcedimento'], 'String');
      if (data.hasOwnProperty('idSerie'))
        obj.idSerie = ApiClient.convertToType(data['idSerie'], 'String');
      if (data.hasOwnProperty('numero'))
        obj.numero = ApiClient.convertToType(data['numero'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], 'String');
      if (data.hasOwnProperty('descricao'))
        obj.descricao = ApiClient.convertToType(data['descricao'], 'String');
      if (data.hasOwnProperty('sigla'))
        obj.sigla = ApiClient.convertToType(data['sigla'], 'String');
      if (data.hasOwnProperty('nome'))
        obj.nome = ApiClient.convertToType(data['nome'], 'String');
      if (data.hasOwnProperty('nomeArquivo'))
        obj.nomeArquivo = ApiClient.convertToType(data['nomeArquivo'], 'String');
      if (data.hasOwnProperty('conteudo'))
        obj.conteudo = ApiClient.convertToType(data['conteudo'], 'String');
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
   * @member {String} tipo
   */
  exports.prototype.tipo = undefined;

  /**
   * @member {String} idProcedimento
   */
  exports.prototype.idProcedimento = undefined;

  /**
   * @member {String} idSerie
   */
  exports.prototype.idSerie = undefined;

  /**
   * @member {String} numero
   */
  exports.prototype.numero = undefined;

  /**
   * @member {String} data
   */
  exports.prototype.data = undefined;

  /**
   * @member {String} descricao
   */
  exports.prototype.descricao = undefined;

  /**
   * @member {String} sigla
   */
  exports.prototype.sigla = undefined;

  /**
   * @member {String} nome
   */
  exports.prototype.nome = undefined;

  /**
   * @member {String} nomeArquivo
   */
  exports.prototype.nomeArquivo = undefined;

  /**
   * @member {String} conteudo
   */
  exports.prototype.conteudo = undefined;


  return exports;
}));
