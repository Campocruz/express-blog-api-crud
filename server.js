// Define Express
const express = require('express');
// Define App
const app = express();
// Define Port
const port = 4000;
// Define Path Static Resource 
app.use(express.static('public'))

const postRouter = require('./routers/postRouters')

// Listen Server
app.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`);

})

// Get Home
app.get('/', (req, res) => {
  res.json({
    messaggio: "Server del mio Blog"
  })
})

app.use('/api/posts', postRouter)