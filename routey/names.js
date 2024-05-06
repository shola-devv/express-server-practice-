const express = require('express');
const { sendNames, sendpersons  } = require('../controller/names')

const router = express.Router();
const people = require('../daty')

router.route('/').get(sendNames)
router.route('/api/:id').post(sendpersons)


module.exports = router