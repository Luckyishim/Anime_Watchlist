import mongoose from "mongoose";

const animeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    episodes: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["Watching", "Completed", "Plan to Watch", "Dropped"],
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})
export default mongoose.model("Anime", animeSchema)