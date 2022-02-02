const express = require('express'),
  router = express.Router()

const controller = require('../controllers/controller')

router.get('/', controller.index)

router.post('/', controller.mailSender)

router.get('/download', controller.downloadCv)

module.exports = router
