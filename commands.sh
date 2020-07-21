export PATH=$PATH:~/go/bin

protoc --go_out=plugins=grpc:. *.proto

go install

protoc -I=. *.proto \
  --js_out=import_style=commonjs:web \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:web

  python -m grpc_tools.protoc -I . --python_out=python --grpc_python_out=python *.proto