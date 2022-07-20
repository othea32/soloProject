const mongoose = require("mongoose");

const FunRunSchema = new mongoose.Schema({

 name: {type: String,
 required: [true, 'name is required'],
 minLength: [3, 'Must be at least 3 characters long!']},
 location: {type: String,
 required: [true, 'location is required'],
 minLength: [3, 'Must be at least 3 characters long!']},
 distance: {type: String,
 required: [true, 'distance is required'],
 minLength: [2, 'Must be at least 3 characters long!']},
 description: {type: String,
 required: [true, 'description is required'],
 minLength: [3, 'Must be at least 3 characters long!']},
 
 
 
 
}, {timestamps: true})

const FunRun = mongoose.model("FunRun", FunRunSchema);

module.exports = FunRun;