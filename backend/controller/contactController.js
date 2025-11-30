const Contact = require("../model/contactModel.js");

// User ka message save karne ke liye
const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res.status(201).json({ message: "Thank you for contacting us!" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = { submitContactForm };
