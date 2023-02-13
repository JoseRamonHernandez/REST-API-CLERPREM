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
  findEventID,
  getAlert,
  createAlert,
  updateAlert,
  deleteAlert,
  findAlertID,
  findAlertsByStatus
 
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

//RUTAS PARA AVISOS (alerts)

router.get('/alerts', getAlert)

router.post('/createAlert', createAlert)

router.post('/updateAlert/:id', updateAlert)

router.get('/deleteAlert/:id', deleteAlert)

router.get('/findAlert/:id', findAlertID)

router.get('/findAlertByStatus/:status', findAlertsByStatus)

export default router