const mongoose = require("mongoose")

async function main() {
    try {
        const username = process.env.USERNAME_MONGODB
        const password = process.env.PASSWORD_MONGODB

        mongoose.set("strictQuery", true)

        await mongoose.connect(
            `mongodb+srv://${username}:${password}@cluster0.0amp3gk.mongodb.net/?retryWrites=true&w=majority`
        )

        console.log("Conectado ao banco!");
    } catch (error) {
        console.log(`Eerro: ${error}`)
    }
}

module.exports = main