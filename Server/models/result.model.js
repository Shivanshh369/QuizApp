import mongoose from "mongoose"

const resultSchema = new mongoose.Schema({
    maximumMarks:{
        type: Number,
        required: true
    },
    obtainMarks:{
        type: Number,
        required: true
    },

    test:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Test",
        required: true
    },

    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

},{timestamps: true})

export default mongoose.model("Result" , resultSchema)