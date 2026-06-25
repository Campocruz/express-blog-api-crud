/*
      IMPORT SECTION
*/

// Define Express
const express = require('express');

// Define App
const app = express();

// Define Port
const port = 3000;

// Import Router Post
const postRouter = require('./routers/postRouters')

// Import middleware
const logReq = require('./middleware/logReq')
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')

// Define Path Static Resource 
app.use(express.static('public'))

// Import JSON format for read body request
app.use(express.json());

/*
      END IMPORT SECTION
*/

// Call log first middleware
app.use(logReq)

// Get Home
app.get('/', (req, res) => {
  res.json({
    messaggio: "Server del mio Blog"
  })
})

// Use Router Post
app.use('/api/posts', postRouter)

// Menage Error 500
app.use(errorHandler)

// Manage 404 url not found
app.use(notFound)



// Listen Server
app.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`);
})