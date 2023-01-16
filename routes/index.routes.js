import  { Router } from 'express'

const router = Router()

//routes
router.get('/', (req, res) => res.send('This is a REST API to CLERPREM'))

export default router