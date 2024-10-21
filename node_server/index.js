const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const path = require('path')

// Load the protobuf file
const PROTO_PATH = path.join(__dirname, '../proto/person.proto')
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {})
const exampleProto = grpc.loadPackageDefinition(packageDefinition).example

// Create a client
const client = new exampleProto.Greeter('localhost:50051', grpc.credentials.createInsecure())

// Create a Person object to send
const person = {
  name: 'John Doe',
  id: 123,
  email: 'john.doe@example.com'
}

// Call the SayHello method
client.SayHello(person, (error, response) => {
  if (error) {
    console.error('Error:', error)
  } else {
    console.log('Response from server:', response)
  }
})
