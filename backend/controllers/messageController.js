const Message = require("../models/message");

// ADD MESSAGE - POST
const addMessage = async (req, res) => {

    try {
        const { name } = req.body;
        const message = await Message.create({
            name: name
        });

        res.status(201).json({
            message: "Name saved successfully",
            data: message
        });

    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }

};


// GET ALL MESSAGES - GET
const getMessages = async (req, res) => {

    try {

        const messages = await Message.find();

        res.status(200).json(messages);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// EXPORT FUNCTIONS
module.exports = {
    addMessage,
    getMessages
};
