const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const client = require("./config.js");
const getItems = require("./routes/getItems.js");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

// app.get('/', async (req, res) => {
//     const result = await client.query(`SELECT * FROM items`);
//     res.status(200).json(result.rows);
// })

app.use('/api', getItems)


const port = process.env.PORT || 3201;

app.listen(port, (err) => {
    if(err){
        console.log(err);
    }
    console.log(`Server is running on port ${port}`);
})