const mongoose = require("mongoose");

// Create Schema
const messageSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

// Create Model
const Message = mongoose.model("Message", messageSchema);

// Export Model
module.exports = Message;
