/**
 * @fileoverview gRPC-Web generated client stub for ppauth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.ppauth = require('./auth-service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ppauth.AuthServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ppauth.AuthServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppauth.AuthRequest,
 *   !proto.ppauth.AuthResponse>}
 */
const methodDescriptor_AuthService_CheckAuth = new grpc.web.MethodDescriptor(
  '/ppauth.AuthService/CheckAuth',
  grpc.web.MethodType.UNARY,
  proto.ppauth.AuthRequest,
  proto.ppauth.AuthResponse,
  /**
   * @param {!proto.ppauth.AuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppauth.AuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppauth.AuthRequest,
 *   !proto.ppauth.AuthResponse>}
 */
const methodInfo_AuthService_CheckAuth = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppauth.AuthResponse,
  /**
   * @param {!proto.ppauth.AuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppauth.AuthResponse.deserializeBinary
);


/**
 * @param {!proto.ppauth.AuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppauth.AuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppauth.AuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppauth.AuthServiceClient.prototype.checkAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppauth.AuthService/CheckAuth',
      request,
      metadata || {},
      methodDescriptor_AuthService_CheckAuth,
      callback);
};


/**
 * @param {!proto.ppauth.AuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppauth.AuthResponse>}
 *     A native promise that resolves to the response
 */
proto.ppauth.AuthServicePromiseClient.prototype.checkAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppauth.AuthService/CheckAuth',
      request,
      metadata || {},
      methodDescriptor_AuthService_CheckAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppauth.TokenRequest,
 *   !proto.ppauth.Token>}
 */
const methodDescriptor_AuthService_GetToken = new grpc.web.MethodDescriptor(
  '/ppauth.AuthService/GetToken',
  grpc.web.MethodType.UNARY,
  proto.ppauth.TokenRequest,
  proto.ppauth.Token,
  /**
   * @param {!proto.ppauth.TokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppauth.Token.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppauth.TokenRequest,
 *   !proto.ppauth.Token>}
 */
const methodInfo_AuthService_GetToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppauth.Token,
  /**
   * @param {!proto.ppauth.TokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppauth.Token.deserializeBinary
);


/**
 * @param {!proto.ppauth.TokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppauth.Token)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppauth.Token>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppauth.AuthServiceClient.prototype.getToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppauth.AuthService/GetToken',
      request,
      metadata || {},
      methodDescriptor_AuthService_GetToken,
      callback);
};


/**
 * @param {!proto.ppauth.TokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppauth.Token>}
 *     A native promise that resolves to the response
 */
proto.ppauth.AuthServicePromiseClient.prototype.getToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppauth.AuthService/GetToken',
      request,
      metadata || {},
      methodDescriptor_AuthService_GetToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ppauth.CreateUserRequest,
 *   !proto.ppauth.CreateUserResponse>}
 */
const methodDescriptor_AuthService_CreateUser = new grpc.web.MethodDescriptor(
  '/ppauth.AuthService/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.ppauth.CreateUserRequest,
  proto.ppauth.CreateUserResponse,
  /**
   * @param {!proto.ppauth.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppauth.CreateUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ppauth.CreateUserRequest,
 *   !proto.ppauth.CreateUserResponse>}
 */
const methodInfo_AuthService_CreateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ppauth.CreateUserResponse,
  /**
   * @param {!proto.ppauth.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ppauth.CreateUserResponse.deserializeBinary
);


/**
 * @param {!proto.ppauth.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ppauth.CreateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ppauth.CreateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ppauth.AuthServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ppauth.AuthService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_AuthService_CreateUser,
      callback);
};


/**
 * @param {!proto.ppauth.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ppauth.CreateUserResponse>}
 *     A native promise that resolves to the response
 */
proto.ppauth.AuthServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ppauth.AuthService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_AuthService_CreateUser);
};


module.exports = proto.ppauth;

