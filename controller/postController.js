const posts = require('../data/posts')


const index = (req, res) => {
  const query = req.query.title;
  if (query) {
    const filterdPost = posts.find(post => post.title.toLowerCase().includes(query.toLowerCase()))
    if (!filterdPost) {
      return res.status(404).json({
        error: 'Post non trovata'
      })
    }
    if (filterdPost) { return res.json(filterdPost) }
  }
  res.json(posts)
}

const show = (req, res) => {
  const index = posts.findIndex(post => post.id === parseInt(req.params.id))
  if (index === -1) {
    return res.status(404).json({
      error: 'Post non trovato'
    })
  }
  res.json(posts[index])
}

const store = (req, res) => {
  res.json({ "messaggio": "store new Post" })
}

const update = (req, res) => {
  res.json({ "messaggio": "Update by Post ID" })
}

const modify = (req, res) => {
  res.json({ "messaggio": "Modify by Post ID" })
}

const destroy = (req, res) => {
  const index = posts.findIndex(post => post.id === parseInt(req.params.id))
  if (index === -1) {
    return res.status(404).json({
      error: 'Post non trovato'
    })
  }
  posts.splice(index, 1)
  res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy }