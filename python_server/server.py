import grpc
from concurrent import futures
import time

import person_pb2
import person_pb2_grpc

# Implement the Greeter service
class Greeter(person_pb2_grpc.GreeterServicer):
    def SayHello(self, request, context):
        return person_pb2.Person(name=f"Hello, {request.name}", id=request.id, email=request.email)

# Start the gRPC server
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    person_pb2_grpc.add_GreeterServicer_to_server(Greeter(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    print("Server running on port 50051...")
    try:
        while True:
            time.sleep(86400)  # Keep server running
    except KeyboardInterrupt:
        server.stop(0)

if __name__ == '__main__':
    serve()
