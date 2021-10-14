import express from 'express'
import cors from 'cors'
import TestRoute from './routes/TestRoute'
import UserRoutes from './routes/UserRoute'

/* const corsOptions = {
  origin: 'https://www.conferemusica.com.br/'
} */

const app = express()

// app.use(cors(corsOptions))
app.use(cors())
app.disable('x-powered-by')
app.use(express.json())

app.use(TestRoute)
app.use(UserRoutes)

export default app
