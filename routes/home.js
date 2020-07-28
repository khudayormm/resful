const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.pug', { title: 'My express app', greeting: 'Hello, How are you?' });
});

module.exports = router;