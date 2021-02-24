const express = require('express');
const cors = require('cors');
require('dotenv').config();
const MongoUtil = require('./MongoUtil')



const mongoUrl = process.env.MONGO_URL

let app = express()
app.use(express.json())
app.use(cors())

async function main() {
    let db = await MongoUtil.connect(mongoUrl, "tgc11_todolist")
    console.log("databse connected")


    app.get('/task', async(req,res)=> {
        let tasks = await db.collection('tasks').find().toArray()
        res.status(200);
        res.send(tasks)
    });

    // create an item 
    app.post('/task', async(req,res) => {
        let title=req.body.title;
        let done=req.body.done;
        try{
            let result= await db.collection('tasks').insertOne({
                'title':title,
                'done':done
            });
            res.status(200)
            res.send(result)
        }catch (e) {
            res.status(500)
            res.send({
                'message':"There is an error"
            })
            console.log(e)
        }
    })

    //PUT

}

main()

app.listen(3001, () => {
    console.log("server has started")
})