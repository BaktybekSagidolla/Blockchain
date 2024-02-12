import express from "express"
import authRouter from "./routes/AuthRouter.js";
import cors from 'cors';

const app = new express()
const PORT = 8000

app.use(express.json())
app.use(cors({origin: "http://localhost:63342"}))

app.use('/auth', authRouter)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Backend server is listening on PORT = ${PORT} `));
    } catch (e) {
        console.log(e);
    }
}

start();