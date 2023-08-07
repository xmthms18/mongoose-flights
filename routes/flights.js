// routes/flights.js
const express = require('express');
const router = express.Router();
const Flight = require('../models/flights');

// Add a destination to a flight
router.post('/:id/destinations', async (req, res) => {
  try {
    const flights = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).send('Flight not found.');
    }

    const { airport, arrival } = req.body;
    flight.destinations.push({ airport, arrival });
    await flight.save();

    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
