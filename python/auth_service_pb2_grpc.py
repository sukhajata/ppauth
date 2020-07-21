# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import auth_service_pb2 as auth__service__pb2


class AuthServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.CheckAuth = channel.unary_unary(
        '/ppauth.AuthService/CheckAuth',
        request_serializer=auth__service__pb2.AuthRequest.SerializeToString,
        response_deserializer=auth__service__pb2.AuthResponse.FromString,
        )
    self.GetToken = channel.unary_unary(
        '/ppauth.AuthService/GetToken',
        request_serializer=auth__service__pb2.TokenRequest.SerializeToString,
        response_deserializer=auth__service__pb2.Token.FromString,
        )


class AuthServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def CheckAuth(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetToken(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_AuthServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'CheckAuth': grpc.unary_unary_rpc_method_handler(
          servicer.CheckAuth,
          request_deserializer=auth__service__pb2.AuthRequest.FromString,
          response_serializer=auth__service__pb2.AuthResponse.SerializeToString,
      ),
      'GetToken': grpc.unary_unary_rpc_method_handler(
          servicer.GetToken,
          request_deserializer=auth__service__pb2.TokenRequest.FromString,
          response_serializer=auth__service__pb2.Token.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'ppauth.AuthService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
