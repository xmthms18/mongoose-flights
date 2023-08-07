const express = require('express');
const router = express.Router({ mergeParams: true }); // Add { mergeParams: true }
const Flight = require('../models/flights');
const Ticket = require('../models/tickets');

// Show the form to create a new ticket for the flight
router.get('/new', async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    res.render('tickets/new', { flight });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Create a new ticket for the flight
router.post('/', async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).send('Flight not found.');
    }

    const { seat, price } = req.body;
    const ticket = new Ticket({ seat, price, flight: flight._id });
    await ticket.save();

    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;