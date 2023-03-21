const express = require('express')
const router = express.Router()


router.route('/:id')
    .get(
        (req, res) => {
            res.send(`Get id of user ${req.params.id}`)
        }
    )
    .put((req, res) => {
            res.send(`Update user with the id of ${req.params.id}`)
        }
    )
    .delete((req, res) => {
            res.send(`Delete user with the id of ${req.params.id}`)
        }
    )

router.param('id', (req, res, text, id) => {
    console.log(id)
})


router.get('/', (req, res) => {
    res.send('user list')

})

router.get('/create', (req, res) => {
    res.send('user new form')
})

router.post('/', (req, res) => {
    res.send('create user')
})

router.get('/:id', (req, res) => {
    req.params.id
    res.send(`Get id of user ${req.params.id}`)
})

module.exports = router