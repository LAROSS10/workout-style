const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        required: "Enter a date",
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "enter a name"
            },

            name: {
                type: String,
                trim: true,
                required: "enter a name"
            },
            duration: {
                type: Number,
                required: "enter a number"

            },
            weight: {
                type: Number,
                required: "enter a number"
            },
            reps: {
                type: Number,
                required: "enter a number",
            },
            sets: {
                type: Number,
                required: "enter a number"
            },
        }
    ]

})



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;