const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
                "mongodb://AdminCherry:cherry2@localhost:27017/admin",
                { useNewUrlParser: true }
        );
    } catch (err) {
                console.error("Error connecting to mongodb");
                console.error(err);
        }
}

module.exports = { connect };