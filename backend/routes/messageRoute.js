const express = require("express");

const router = express.Router();

// Import controller functions
const {
    addMessage,
    getMessages
} = require("../controllers/messageController");

// POST - Add message
router.post("/messages", addMessage);

// GET - Get all messages
router.get("/messages", getMessages);

// Export router
module.exports = router;
