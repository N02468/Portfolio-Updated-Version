const express = require('express');
const router = express.Router();

const { submitContactForm } = require('../controllers/Contactcontroller'); // Import controller

// POST: Create a new contact entry
router.post('/', submitContactForm);

// Export the router
module.exports = router;
