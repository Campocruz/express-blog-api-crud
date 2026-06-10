const express = require('express');

const router = express.Router();

const postController = require('../controller/postController')

// GET -> INDEX
router.get('/', postController.index)

// GET by ID -> SHOW
router.get('/:id', postController.show)

// POST by ID -> STORE
router.post('/', postController.store)

// PUT by ID -> UPDATE
router.put('/:id', postController.update)

// PATCH by ID -> MODIFY
router.patch('/:id', postController.modify)

// DELETE by ID -> DESTROY
router.delete('/:id', postController.destroy)

module.exports = router;