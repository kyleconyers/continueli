const Message = require('../db/models/message')
const express = require('express')
const router = express.Router()

router.post('/message', (req, res) => {
    const { messageText } = req.body
    const newMessage = new Message({
        'text': messageText,
        'timeStamp': new Date()
    })
    newMessage.save((err, savedMessage) => {
        console.log(savedMessage)
        if (err) return res.json(err)
        return res.json(savedMessage)
    })
})

module.exports = router