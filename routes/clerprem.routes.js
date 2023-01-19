import { Router } from 'express'
import {
  getCollaborator,
  createCollaborator,
  updateCollaborator,
  deleteCollaborator,
  findCollaboratorID,
  findCollaboratorNME,
  } from '../controllers/collaborator.controller.js'

const router = Router()

router.get('/collaborators', getCollaborator)

router.post('/collaboratorRegister', createCollaborator)

router.put('/collaboratorUpdate/:id', updateCollaborator)

router.delete('/collaboratorDelete/:id', deleteCollaborator)

router.post('/collaboratorFind/:id', findCollaboratorID)

router.post('/collaboratorNumberFind/:user/:password', findCollaboratorNME)

export default router