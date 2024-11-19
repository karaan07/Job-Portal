import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: Number,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['student', 'recruiter'],
        required: true
    },
    profile:{
        bio: { type: String },
        skills: [{ type: String }],
        resume: { type: String }, // URL for resume file
        resumeOriginalName: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
        profilephoto:{
            type: String,
            default: ""
        }
    }
}, { timestamps: true }); // Ensure timestamps are placed outside the schema

export const User = mongoose.model('User', userSchema);
