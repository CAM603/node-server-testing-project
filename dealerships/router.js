const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ router: 'dealerships' })
})

module.exports = router;