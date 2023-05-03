const express = require('express');
const router = express.Router();
const { Calendar } = require('../database/models');
const ash = require('express-async-handler');

// GET all events
router.get('/', ash(async (req, res) => {
  const events = await Calendar.findAll({});
  res.status(200).json(events);
}));

//** get event by id **//
router.get('/:id', ash(async (req, res) => {
  let event = await Calendar.findByPk(req.params.id);
  res.status(200).json(event);
}));

//** add new event **/
router.post('/', function(req,res,next){
  Calendar.create(req.body)
  .then(createdCalendar => res.status(200).json(createdCalendar)).catch(err=>next(err));
});

//** update event by id **//
router.put('/:id', ash(async (req, res) => {
  await Calendar.update(req.body, {
      where: { id: req.params.id }
  });
  let events = await Calendar.findByPk(req.params.id);
  res.status(201).json(events);
}));

//** delete event **//
router.delete('/:id',function(req,res,next) {
  Calendar.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.status(200).json("deleted an event"))
  .catch(err => next(err));
});

module.exports = router;