import mongoose from 'mongoose';

// defining schema 
const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim:true },
    age: { type: Number, required: true, min: 1, max: 60 },
    class: { type: String, required: true }
});

// creating model or compiling schema
const StudentModel = new mongoose.model('Student', StudentSchema);

export default StudentModel;