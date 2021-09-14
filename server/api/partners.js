/* eslint no-console: 0 */
const { Router } = require('express');
const Partner = require('../../models/partners');

const router = Router();

router.get('/test', (req, res) => {
  res.json(req.client);
});

router.get('/', async (req, res) => {
  try {
    const partners = await Partner.find({}).sort({ _id: -1 });
    if (partners.length) { res.json(partners); } else { res.json({ code: res.statusCode, message: 'No partners found' }) }
  } catch (error) {
    console.error(error.stack);
    res.json({ code: res.statusCode, message: error.message });
  }
});

router.get('/:guildID', async (req, res) => {
  const { guildID } = req.params;
  try {
    const partner = await Partner.findOne({ guildID });
    if (!partner) { res.json({ code: res.statusCode, message: `Partner ${guildID} not found.` }); } else { res.json(partner); }
  } catch (error) {
    console.error(error.stack);
    res.json({ code: res.statusCode, message: error.message });
  }
});

// router.post('/', async (req, res) => {

//   try {
//   } catch (error) {
//     console.error(error.stack);
//     res.json({ code: res.statusCode, message: error.message });
//   }
// });

module.exports = router;
