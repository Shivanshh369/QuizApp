import mongoose, { trusted } from "mongoose"

const questionSchema = new mongoose.Schema({
    questionText:{
        type: String,
        require: trusted
    },

    option: [{
        type: String,
        required: true
    }],

    correctOption: {
        type: Number,
        required: true
    },
    explaintion: {
        type: String,
        required: true
    },
    Test:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Test",
        required: true
    }
}, {timestamps: true})
 export default mongoose.model("Question", questionSchema)
