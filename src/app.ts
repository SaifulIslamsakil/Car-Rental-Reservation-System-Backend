import express from "express"
import cors from "cors"
import NotFoundRoute from "./app/Midleware/NotFoundRoute"
import GlobalErrorHandling from "./app/Midleware/GlobalErrorHandling"
import Router from "./app/Route"

import cookieParser from "cookie-parser"
const app = express()

app.use(express.json())
app.use(cors({origin: ['http://localhost:5173']}))
app.use(cookieParser())

// use Route
app.use("/api", Router)

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use(GlobalErrorHandling)
app.use(NotFoundRoute)

export default app

