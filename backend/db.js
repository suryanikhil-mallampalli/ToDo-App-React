const mongoose = require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb+srv://suryanikhilm:WTrCMs6b9QbsdNPg@cluster0.kmkgllv.mongodb.net/todos")
const todoSchema = new mongoose.Schema({
    title: {type:String},
    description: {type:String},
    completed: {type: Boolean}
})
const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}