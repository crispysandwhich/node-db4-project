const server = require('./api/server')

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log('listing to port' , PORT)
})

// npx knex init 

// npx knex migrate:make name 

// npx knex seed:make name 