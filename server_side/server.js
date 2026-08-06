import { configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import animeRoutes from "./routes/animeRoutes.js";

//to add the .env file in other places
configDotenv();

const app = express();

//For the connection port
const PORT = process.env.PORT || 3050

//For Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Database is connected successfully')
    } catch (error) {
        console.log('The database is not connected due to ', error)
        process.exit(1)
    }
}
connectDB();

//Routes by default and using express json format
app.use(express.json())
app.use('/', animeRoutes)


//listening and using the port number
console.log('Hey it works')
app.listen(PORT, () => {
    console.log(`The port is running in server ${PORT}`)
})