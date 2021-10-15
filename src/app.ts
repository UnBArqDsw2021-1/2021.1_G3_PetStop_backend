import express from 'express'
import cors from 'cors'
import UserRoutes from './routes/UserRoute'

/* const corsOptions = {
  origin: 'https://www.conferemusica.com.br/'
} */

const app = express()

// app.use(cors(corsOptions))
app.use(cors())
app.disable('x-powered-by')
app.use(express.json())

app.use('/user', UserRoutes)

export default app
