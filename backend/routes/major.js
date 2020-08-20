const router = require('express').Router();

const { createMajor } = require('../controllers/major');
router.route('/').post(createMajor);

module.exports = router;
