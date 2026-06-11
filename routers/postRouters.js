// Define Express
const express = require('express');

// Define Router
const router = express.Router();

// Import Controller Post
const postController = require('../controller/postController')

// Import middleware
const logReq = require('../middleware/logReq')
const checkApiKey = require('../middleware/checkApiKey')

// GET -> INDEX
router.get('/', postController.index)

// GET by ID -> SHOW
router.get('/:id', postController.show)

// POST by ID -> STORE
router.post('/', checkApiKey, postController.store)

// PUT by ID -> UPDATE
router.put('/:id', checkApiKey, postController.update)

// PATCH by ID -> MODIFY
router.patch('/:id', checkApiKey, postController.modify)

// DELETE by ID -> DESTROY
router.delete('/:id', postController.destroy)

module.exports = router;