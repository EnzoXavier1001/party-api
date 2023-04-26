const mongoose = require("mongoose")

async function main() {
    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect(
            "mongodb+srv://admin:T3NEdEEFBykgYZt7@cluster0.0amp3gk.mongodb.net/?retryWrites=true&w=majority"
        )

        console.log("Conectado ao banco!");
    } catch (error) {
        console.log(`Eerro: ${error}`)
    }
}

module.exports = main