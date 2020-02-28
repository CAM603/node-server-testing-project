const Dealers = require('./model');

const router = require('express').Router();

router.get('/', (req, res) => {
    Dealers.all().then(dealers => {
        res.status(200).json(dealers)
    })
    .catch(({name, message, stack, code}) => {
        console.log({name, message, stack, code})
        res.status(500).json({name, message, stack, code})
    })
})

module.exports = router;