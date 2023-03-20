import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './Routes.js';

const app = express();
app.use(bodyParser.json({limit: '30mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb',extended: true}));
app.use(cors());
app.use('/images',postRoutes);
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb+srv://harshalu21:Harshal%40456@cluster0.frpzinr.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true})
    .then(()=>app.listen(PORT,() => console.log(`Successfully listening on port: ${PORT}`)))
    .catch((error) => console.log(error));

mongoose.set('strictQuery',false);