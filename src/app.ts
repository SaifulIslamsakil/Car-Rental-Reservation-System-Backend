import express from "express"
import cors from "cors"
import NotFoundRoute from "./app/Midleware/NotFoundRoute"
import GlobalErrorHandling from "./app/Midleware/GlobalErrorHandling"
import Router from "./app/Route"
const app = express()

app.use(express.json())
app.use(cors())

// use Route

app.use("/api/v1", Router)

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use(GlobalErrorHandling)
app.use(NotFoundRoute)

export default app

