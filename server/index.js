import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import Connection from './db_conn/connection.js';
import router from './routes/router.js';


const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 8000;
const app = express();


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);
app.use(express.json())

Connection(DB_URL)

app.listen(PORT, () => console.log("Server is running at port", PORT))