# GRPC Mini Demo
Communication between python and javascript

## Python Server
### install python server dependencies
```
cd python_server
pip install grpcio grpcio-tools 
```

### generate python grpc server code from protobuf
```
python3 -m grpc_tools.protoc -I../proto --python_out=. --grpc_python_out=. ../proto/person.proto
```

### run python server
```
python server.py
```

## Node Client

new terminal at the root of this app

### install node dependencies
```
cd node_server
npm ci
```

### run node example client code
```
node index
```