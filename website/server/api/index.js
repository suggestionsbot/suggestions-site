const { Router } = require('express');
const auth = require('./auth');
const partners = require('./partners');

const router = Router();

router.use('/', auth);
router.use('/partners', partners);

module.exports = router;
