
const express = require('express')

const router = express.Router(); // 路由与app很相似，即迷你版app


router.get('/', (req, res, next) => {
    res.json(['kobi', 'lilei'])
})

router.get('/:id', (req, res, next) => {
    res.json(req.params.id + '的信息')
})

router.post('/', (req, res, next) => {
    res.json('插入成功')
})

module.exports = router;