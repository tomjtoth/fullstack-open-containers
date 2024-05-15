const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis')

router.get('/', async(req, res)=> {
    added_todos = Number(await getAsync('added_todos'));

    res.json({added_todos});
})

module.exports = router;
