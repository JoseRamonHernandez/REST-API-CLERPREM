import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => res.send('This is a REST API to CLERPREM'))

export default app