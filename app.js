import express from 'express'
import morgan from 'morgan'
import indexRoutes from './routes/index.routes.js'
import userRoutes from './routes/clerprem.routes.js'

const app = express()

app.use(morgan('dev'))

app.use(indexRoutes)
app.use(userRoutes)

export default app