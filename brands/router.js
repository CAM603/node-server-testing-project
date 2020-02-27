const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ router: 'brands' })
})

module.exports = router;