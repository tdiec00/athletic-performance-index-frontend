import express from "express"
import logger from "morgan"
import cors from "cors"
import exercises from "./routes/exercises.js"
import db from "./db/connection.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(logger("dev"))

app.use("/", exercises)

db.on("connected", () => {
  app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`)
  })
})
