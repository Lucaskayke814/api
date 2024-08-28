# Sei.DefaultApi

All URIs are relative to *https://virtserver.swaggerhub.com/LUCASKAYKE13/SEI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**concluirProcessoPost**](DefaultApi.md#concluirProcessoPost) | **POST** /concluirProcesso | 
[**consultarProcedimentoPost**](DefaultApi.md#consultarProcedimentoPost) | **POST** /consultarProcedimento | 
[**criarProcessoPost**](DefaultApi.md#criarProcessoPost) | **POST** /criarProcesso | 
[**gerarProcedimentoPost**](DefaultApi.md#gerarProcedimentoPost) | **POST** /gerarProcedimento | 
[**incluirDocumentoPost**](DefaultApi.md#incluirDocumentoPost) | **POST** /incluirDocumento | 
[**reabrirProcessoPost**](DefaultApi.md#reabrirProcessoPost) | **POST** /reabrirProcesso | 


<a name="concluirProcessoPost"></a>
# **concluirProcessoPost**
> concluirProcessoPost(opts)



### Example
```javascript
var Sei = require('sei');

var apiInstance = new Sei.DefaultApi();

var opts = { 
  'payload': new Sei.Payload2() // Payload2 | Request Body
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.concluirProcessoPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**Payload2**](Payload2.md)| Request Body | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="consultarProcedimentoPost"></a>
# **consultarProcedimentoPost**
> consultarProcedimentoPost(opts)



### Example
```javascript
var Sei = require('sei');

var apiInstance = new Sei.DefaultApi();

var opts = { 
  'payload': new Sei.Payload3() // Payload3 | Request Body
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.consultarProcedimentoPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**Payload3**](Payload3.md)| Request Body | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="criarProcessoPost"></a>
# **criarProcessoPost**
> criarProcessoPost(opts)



### Example
```javascript
var Sei = require('sei');

var apiInstance = new Sei.DefaultApi();

var opts = { 
  'payload': new Sei.Payload() // Payload | Request Body
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.criarProcessoPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**Payload**](Payload.md)| Request Body | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="gerarProcedimentoPost"></a>
# **gerarProcedimentoPost**
> gerarProcedimentoPost(opts)



### Example
```javascript
var Sei = require('sei');

var apiInstance = new Sei.DefaultApi();

var opts = { 
  'payload': new Sei.Payload5() // Payload5 | Request Body
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.gerarProcedimentoPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**Payload5**](Payload5.md)| Request Body | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="incluirDocumentoPost"></a>
# **incluirDocumentoPost**
> incluirDocumentoPost(opts)



### Example
```javascript
var Sei = require('sei');

var apiInstance = new Sei.DefaultApi();

var opts = { 
  'payload': new Sei.Payload1() // Payload1 | Request Body
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.incluirDocumentoPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**Payload1**](Payload1.md)| Request Body | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="reabrirProcessoPost"></a>
# **reabrirProcessoPost**
> reabrirProcessoPost(opts)



### Example
```javascript
var Sei = require('sei');

var apiInstance = new Sei.DefaultApi();

var opts = { 
  'payload': new Sei.Payload4() // Payload4 | Request Body
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.reabrirProcessoPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**Payload4**](Payload4.md)| Request Body | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

