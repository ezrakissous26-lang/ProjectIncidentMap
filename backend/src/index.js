import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { router } from './routes/auth.routes.js'
import { clientConnect } from './db/connect.js'
import { errorHandler } from './utils/errorHandler.js'

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)
app.use(errorHandler)

async function createServer() {
    await clientConnect()
    app.listen(PORT, () => {
        console.log(`App running on http://localhost:${PORT}`)
    })
}

await createServer()