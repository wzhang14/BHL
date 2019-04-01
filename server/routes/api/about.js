const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Blogs
router.get('/', (req, res) => {
    res.send('about');
});

// Add Blogs

// Delete Blogs

module.exports = router;

