const { Schema, default: mongoose } = require("mongoose");

const studentsSchema = new Schema({
    firstName:{
        type:String,
        required: true, ['Firstname is required']
    },
    lastName:{
        type:String,
        required: true, ['Lastname is required'] 
    },
    gender:{
        type: String
    }
});

const Student =mongoose.model('student', studentsSchema);
module.exports = Student;