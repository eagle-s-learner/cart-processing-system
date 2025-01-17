import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("hello");
})


const port = process.env.PORT || 3201;

app.listen(port, (err) => {
    if(err){
        console.log(err);
    }
    console.log(`Server is running on port ${port}`);
})