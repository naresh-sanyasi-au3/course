const express = require('express');
const router = express.Router();

let Blog = require('../models/createblog');

router.get('/', (req, res) =>{
    Blog.find()
    .then(blog => res.json(blog))
    .catch(err => res.status(400).json('error: ' + err));
});
router.post('/add', (req, res)=>{
    const title = req.body.title;
    const description = req.body.description;


    const newBlog = new Blog({
        title,
        description
    });

    newBlog.save()
    .then(() => res.json('Blog added'))
    .catch(err => res.status(400).json('error: ' + err));
    console.log("Blog added: " + newBlog)
});

module.exports = router;