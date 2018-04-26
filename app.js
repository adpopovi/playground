// ./app.js
const express = require('express')
const mountRoutes = require('./routes')

const app = express()
mountRoutes(app)
app.listen(3001, () => {
    console.log('example is listening on port 3k')
})

// ... more express setup stuff can follow