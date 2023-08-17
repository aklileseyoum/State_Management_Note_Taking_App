const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('notes.json')
const cors = require('cors')

server.use(cors())

server.use('/', router)
server.listen(5001, () => {
console.log('Mock api server listening at localhost:5001')
})
