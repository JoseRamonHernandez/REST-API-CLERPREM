import { Router } from 'express'
import {
  getCollaborator,
  createCollaborator,
  updateCollaborator,
  deleteCollaborator,
  findCollaboratorID,
  findCollaboratorNME,
  findCollaboratorNumber,
  findCollaboratorArea,
  findCollaboratorPassword,
  findForType,

 
} from '../controllers/clerprem.controller.js'

const router = Router()

// Rutas tipo COLABORADOR
router.get('/collaborators', getCollaborator)

router.post('/collaboratorRegister', createCollaborator)

router.put('/collaboratorUpdate/:id', updateCollaborator)

router.delete('/collaboratorDelete/:id', deleteCollaborator)

router.get('/collaboratorFind/:id', findCollaboratorID)

router.get('/collaboratorNumberFind/:user/:password', findCollaboratorNME)

router.get('/collaborator/:user', findCollaboratorNumber)

router.get('/collaboratorArea/:user', findCollaboratorArea)

router.get('/collaboratorpassword/:user', findCollaboratorPassword)

router.get('/collaboratorType/:user', findForType)


export default router