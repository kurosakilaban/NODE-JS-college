const { Schema, default: mongoose } = require("mongoose");

const studentsSchema = new Schema({
    firstName:{
        type:String,
        required:  [true,'FirstName is required']
    },
    lastName:{
        type:String,
        required:  [true,'LastName is required'] 
    },
    gender:{
        type: String
    }
});

const Student =mongoose.model('student', studentsSchema);
module.exports = Student;