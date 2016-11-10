'use strict'

const Hapi = require('hapi')
const plugins = require('./plugins')
const routes = require('./routes')

const port = process.argv[2] || process.env['PORT'] || 4000

const server = new Hapi.Server()
server.connection({ port })

server.register(plugins, (err) => {
  if (err) {
    throw err
  }

  server.route(routes)

  server.start((err) => {
    if (err) {
      throw err
    }
    server.log('info', `Server running at: ${server.info.uri}`)
  })

})

