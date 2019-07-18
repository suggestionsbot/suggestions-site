const { Router } = require('express');
const auth = require('./auth');
// const partners = require('./partners');
const client = require('./client');

const router = Router();

router.use('/', auth);
// router.use('/partners', partners);
router.use('/client', client);

module.exports = router;
