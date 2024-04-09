import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim: true
     },
      email: {
        type: String,
        require: true,
        trim: true
      },
      type:{
        type: String,
        require: true,
        default: "student"
      },
      password:{
        type: String,
        require: true,
        minLength :[6,"password must be at least 6 character long"],
        maxLength :[6,"password must be at least 32 character long"]

      },
      profileImg:{
        public_url:{
            type: String,
            default: null
        },
        secure_url:{
            type: String,
            default: null
        }
      },
      coverImg:{
        public_url:{
            type: String,
            default: null
        },
        secure_url:{
            type: String,
            default: null
        }
      },

      forgetPasswordToken:{
        type: String,
        default: null
      },

      forgetPasswordTokenExpiry:{
        type: Date,
        default: null
      },

}, {timestamps: true})

export default mongoose.model("User", userSchema)