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
  const newId = posts[posts.length - 1].id + 1;
  const newPost = {
    "id": newId,
    "title": req.body.title,
    "content": req.body.content,
    "image": req.body.image,
    "tags": req.body.tags
  }

  posts.push(newPost);

  res.status(201);
  res.json(newPost);

}

const update = (req, res) => {
  const isBody = req.body;
  if (isBody) {
    const idPost = req.params.id;
    const indexPost = posts.findIndex(post => post.id === parseInt(idPost))
    if (indexPost === -1) {
      return res.status(404).json({
        error: 'Post non Trovato'
      })
    }

    posts[indexPost] = {
      ...posts[indexPost],
      "title": req.body.title,
      "content": req.body.content,
      "image": req.body.image,
      "tags": req.body.tags
    };

    res.status(201);
    res.json(posts)
  } else {
    return res.status(404).json({
      error: 'Nessun body'
    })
  }
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