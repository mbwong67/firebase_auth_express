// Import express
import express, { Application, json } from 'express';
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors"
import PostRouters from "./routers/post_router";
import UserRouters from "./routers/user_router"
import dotenv from 'dotenv';
dotenv.config();


const app: Application = express();
app.use(cors());
app.use(json());

// PORT Number
const PORT = process.env.PORT || 5000;
const mongo_url = "mongodb+srv://teebhagg:teebhagg@cluster0.ibbgkwr.mongodb.net/?retryWrites=true&w=majority"

// Connect to MongoDB
var mongoConnect = mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} as ConnectOptions)

app.use("/api/posts", PostRouters);
app.use("/api/users", UserRouters)

app.listen(PORT, async()=>{
    console.log("server is running");
    try {
        await mongoConnect;
        console.log('DB Connected')
    } catch (error) {
        console.log(error)
    }
});