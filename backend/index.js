const express =  require("express");
const cors = require("cors");
const { createTodo} = require("./types");
const {todo} = require("./db");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong data"
        })
        return;
    }
    // putting it in mongo DB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created successfully"
    })
})
app.get("/todos",async function(req,res){
    const todos = await todo.find({});
    // console.log(todos)
    res.json({
        todos
    })
})
app.get("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong data"
        })
        return;
    }  
    await todo.update ({
        _id:req.body.id},
        {
            completed:true
        })
    res.json({
        msg: "Todo updated successfully"
    })

})
app.listen(3000, ()=>{
    console.log("server started");});