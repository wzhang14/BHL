const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Blogs
router.get('/', (req, res) => {
    res.send('contact');
});

// Add Blogs

// Delete Blogs

module.exports = router;

