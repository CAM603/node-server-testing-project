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

router.post('/', (req, res) => {

    Dealers.add(req.body)
        .then(dealer => {
            res.status(201).json(dealer)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to add dealership' })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Dealers.remove(id)
        .then(deleted => {
            if(deleted) {
                res.status(200).json(deleted)
            } else {
                res.status(404).json({message: 'Failed to find dealership with given id'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to delete dealership' })
        })
})

module.exports = router;