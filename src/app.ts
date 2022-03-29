import express, { Application } from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import dbInit from './models'
import FAQ from './routes/faq.route'
const app: Application = express()
config()

dbInit()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(FAQ)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
})
