const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json({ message: 'home message' })
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: "home message" });
})

router.post('/', async (req, res, next) => {
  res.json({ message: "home message" });
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
