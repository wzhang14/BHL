const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Blogs
router.get('/', async (req, res) => {
    const blogs = await loadBlogsCollection();
    res.send(await blogs.find({}).toArray());
});

// Add Blogs
router.post('/', async (req, res) => {
    const blogs = await loadBlogsCollection();
    await blogs.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

// Delete Blogs
router.delete('/:id', async (req, res) => {
    const blogs = await loadBlogsCollection();
    await blogs.deleteOne({ _id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadBlogsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://wei:TerrySam5@clusterwei-8wlqd.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

    return client.db('BHL').collection('blogs');
}

module.exports = router;

