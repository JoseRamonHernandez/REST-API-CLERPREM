import { Router } from 'express'

const router = Router()

router.get('/collaborator', (req, res) => res.send('getting collaborator'))

router.post('/collaborator', (req, res) => res.send('create collaborator'))

router.put('/collaborator', (req, res) => res.send('update collaborator'))

router.delete('/collaborator', (req, res) => res.send('delete collaborator'))

export default router