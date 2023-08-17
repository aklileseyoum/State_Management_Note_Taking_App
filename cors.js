const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('notes.json')
// const middlewares = jsonServer.defaults({ noCors: true })

// server.use(middlewares)
const cors = require('cors')

server.use(cors())

server.use('/', router)
// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', '*')
//     next()
// }) 
server.listen(5001, () => {
console.log('Mock api server listening at localhost:5001')
})
