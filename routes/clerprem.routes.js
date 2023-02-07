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
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  findEventID
 
} from '../controllers/clerprem.controller.js'

const router = Router()

// Rutas tipo COLABORADOR
router.get('/collaborators', getCollaborator)

router.post('/collaboratorRegister', createCollaborator)

router.post('/collaboratorUpdate/:id', updateCollaborator)

router.get('/collaboratorDelete/:id', deleteCollaborator)

router.get('/collaboratorFind/:id', findCollaboratorID)

router.get('/collaboratorNumberFind/:user/:password', findCollaboratorNME)

router.get('/collaborator/:user', findCollaboratorNumber)

router.get('/collaboratorArea/:user', findCollaboratorArea)

router.get('/collaboratorpassword/:user', findCollaboratorPassword)

router.get('/collaboratorType/:user', findForType)

//RUTAS PARA EVENTOS

router.get('/events', getEvents)

router.post('/createEvent', createEvent)

router.post('/updateEvent/:id', updateEvent)

router.get('/deleteEvent/:id', deleteEvent)

router.get('/findEvent/:id', findEventID)

export default router