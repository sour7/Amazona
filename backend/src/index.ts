import express, { Request, Response } from 'express';
// import dotenv from "dotenv";
// import mongoose from "mongoose";
import cors from 'cors';
// import cookieParser from "cookie-parser";
import { sampleProducts } from './data';
const app = express();
// dotenv.config()

app.get('/api/products', (req: Request, res: Response) => {
  res.json(sampleProducts);
});

const PORT = process.env.PORT || 8000;

//   const connect=async()=>{
//    try {
//    await mongoose.connect(process.env.MONGO_URL)
//     console.log("connected to db")
//    } catch (error) {
//     console.log(error.codeName)
//    }
//   }

//   mongoose.connection.on("disconnected", ()=>{
//     console.log("mongo db disconnected")
//   })

//   mongoose.connection.on("connected", ()=>{
//     console.log("mongo db connected")
//   })

app.get('/test', (req: Request, res: Response) => {
  res.send('hello from apis');
});

// middleware
app.use(
  cors({
    credentials: true,
  })
);
// app.use(cookieParser())
app.use(express.json());

app.listen(PORT, () => {
  // connect()
  console.log('app is listening on port:' + PORT);
});
