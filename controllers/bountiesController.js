const router = require('express').Router()

const models = require('../models')

router.get('/', (req, res) => {
    models.Bounty.find().then((foundBounties) => {
        res.status(200).json({ bounties: foundBounties })
    })
    .catch(err => { res.send(err) })
})
router.get('/:id', (req, res) => {
    models.Bounty.findOne({_id: req.params.id}).then((bounty) => {
        res.status(200).json({ bounty })
    })
    .catch(err => { res.send(err) })
})
router.post('/', (req, res) => {
    models.Bounty.create(req.body).then((bounty) => {
        res.status(201).json({ bounty })
    })
    .catch(err => { res.send(err) })
})
router.put('/:id', (req, res) => {
    res.send('Hello from PUT /bounties/:id')
})
router.delete('/:id', (req, res) => {
    res.send('Hello from DELETE /bounties/:id')
})

module.exports = router