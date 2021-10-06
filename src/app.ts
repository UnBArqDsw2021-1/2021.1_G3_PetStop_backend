import express from 'express'
import cors from 'cors'
import TestRoute from './routes/TestRoute'

/* const corsOptions = {
  origin: 'https://www.conferemusica.com.br/'
} */

const app = express()

// app.use(cors(corsOptions))
app.use(cors())
app.disable('x-powered-by')
app.use(express.json())

app.use(TestRoute)

export default app
