import { Router } from 'express'
import {
  getCollaborator,
  createCollaborator,
  updateCollaborator,
  deleteCollaborator,
  findCollaboratorID,
  findCollaboratorNME,
  findCollaboratorNumber,

  getAdministrators,
  createAdministrator,
  updateAdministrator,
  deleteAdministrator,
  findAdministratorId,
  findAdministratorNME,
  findAdministratorNumber,
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


//Rutas tipo Administrador
router.get('/administrators', getAdministrators)

router.post('/administratorRegister', createAdministrator)

router.put('/administratorUpdate/:id', updateAdministrator)

router.delete('/administratorDelete/:id', deleteAdministrator)

router.get('/administratorFind/:id', findAdministratorId)

router.get('/administratorNumberFind/:user/:password', findAdministratorNME)

router.get('/administrator/:user', findAdministratorNumber)


export default router