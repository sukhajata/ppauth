export PATH=$PATH:~/go/bin

protoc --go_out=plugins=grpc:. *.proto

go install