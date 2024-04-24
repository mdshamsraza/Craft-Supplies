import dotenv from "dotenv"
import express from "express"
import connectDB from "./config/db.js"
import authRoutes from './routes/authRoute.js'
import morgan from "morgan"
import colors from "colors"
import cors from "cors";

//config env
dotenv.config()

//config database
connectDB();

//rest abject
const app = express()


//middelwares
app.use(cors());
app.use(express.json()) //parse json request body
app.use(morgan("dev"))  //log requests to the console

//routes
app.use("/api/v1/auth", authRoutes);


// rest API
app.get('/', (req, res) => {
    res.send("<h1>hello</h1>")
})                

//PORT
const PORT = process.env.PORT || 8080

//run server
app.listen(PORT,()=>{
    console.log(`server is running on ${process.env.DEV_MODE}mode on port ${PORT}`.bgCyan.white)

})