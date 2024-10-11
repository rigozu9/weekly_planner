const express = require('express')
const router = express.Router()

router.get('/', (reg, res) => {
    res.send("Here are your plans")
})

module.exports = router