const express = require("express")
const cors = require("cors")
const pool = require("./db")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.post("/schedule", async(req,res)=>{

const {platform,content,date} = req.body

await pool.query(
"INSERT INTO posts(platform,content,schedule_time) VALUES($1,$2,$3)",
[platform,content,date]
)

res.send("Post scheduled")

})

app.get("/posts", async(req,res)=>{

const result = await pool.query("SELECT * FROM posts")

res.json(result.rows)

})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})