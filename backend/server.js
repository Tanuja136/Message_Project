const dns = require("dns");
// Use Google's DNS servers
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

// Import Routes
const messageRoutes = require("./routes/messageRoute");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", messageRoutes);

// Connect MongoDB and Start Server
async function startServer() {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected Successfully");

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log("Server running on port " + PORT);
        });

    } catch (error) {

        console.log("Database Connection Failed:", error.message);

    }

}

startServer();
