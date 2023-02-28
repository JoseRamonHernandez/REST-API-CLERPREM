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
  vacanciesApplied,
  showApplied,
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
  findAlertsByStatus,
  getVacancies,
  createVacancies,
  updateVacancies,
  agregarVacancies,
  deleteVacancies,
  findVacanciesID,
  findVacancie,
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  findProjectID
  
 
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

router.post('/vacaniesApplied/:id', vacanciesApplied)

router.get('/showApplied/:id', showApplied)

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


//RUTAS PARA Vacancies

router.get('/Vacancies', getVacancies)

router.post('/createVacancies', createVacancies)

router.post('/updateVacancies/:id', updateVacancies)

router.post('/registerApplicators/:id', agregarVacancies)

router.get('/deleteVacancies/:id', deleteVacancies)

router.get('/findVacancies/:id', findVacanciesID)

router.get('/findVacancie/:id', findVacancie)

//RUTAS PARA PROYECTOS

router.get('/projects', getProjects)

router.post('/createProject', createProject)

router.post('/updateProject/:id', updateProject)

router.get('/deleteProject/:id', deleteProject)

router.get('/findProject/:id', findProjectID)

export default router