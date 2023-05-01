const express = require('express');
const router = express.Router();
const { Admin } = require('../database/models');

// helper function so we don't need to wrap our
// handler functions in try-catch blocks;
// the async handler will catch any errors and pass
// them to the error-handling middleware (defined in app.js)
const ash = require('express-async-handler');

/** get admin by id**/
router.get('/:id', ash(async (req, res) => {
  let admin = await Admin.findByPk(req.params.id);
  res.status(200).json(admin);
}));

module.exports = router