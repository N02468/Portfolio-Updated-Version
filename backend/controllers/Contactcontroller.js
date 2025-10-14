const Contact = require('../models/Contact');


const submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate inputs
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create and save new contact
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        res.status(201).json({ message: 'Contact form submitted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to submit contact form' });
    }
}

module.exports = { submitContactForm };