import express from "express"
import cors from "cors"
import NotFoundRoute from "./app/Midleware/NotFoundRoute"
const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.use(NotFoundRoute)

export default app

