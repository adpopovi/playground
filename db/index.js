const { Client, Pool } = require('pg')

const pgConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
}

const pool = new Pool(pgConfig)

const listener = new Client(pgConfig)
  listener.connect()
  listener.query('LISTEN channel')
  listener.on('error', msg => {
    console.log('!!! I am here')
    // do your thing here
})

pool.on('error', (err) => {
  console.log('### got err: ', err)
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}