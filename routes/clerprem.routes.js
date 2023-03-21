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
  findProjectID,
  getCategories,
  createCategorie,
  updateCategorie,
  insertCourse,
  deleteCategorie,
  findCoursesID,
  findCategorie,
  findCursoByIdOnCategorieID,
  insertMaterial,
  insertQuestion,
  findQuestion,
  insertAnswerOption,
  insertOptions,
  findAnswerOption,
  getOptions,
  deleteCourse,
  deleteMaterial,
  getAllQuestions,
  deleteOneQuestion,
  updateQuestionText,
  updateAnswerOption,
  updateAllOptions,
  getOperations,
  createOperation,
  updateOperation,
  agregarCollaborators,
  deleteOperation,
  getCollaboratorsIntoOperationID,
  findOperation

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

//RUTAS PARA Categories

router.get('/Categories', getCategories)

router.post('/createCategorie', createCategorie)

router.post('/updateCategorie/:id', updateCategorie)

router.post('/insertCourse/:id', insertCourse)

router.get('/deleteCategorie/:id', deleteCategorie)

router.get('/findCourses/:id', findCoursesID)

router.get('/findCategorie/:id', findCategorie)

router.get('/:id/curso/:idcurso', findCursoByIdOnCategorieID)

router.post('/:id/insertMaterial/:idcurso', insertMaterial)

router.post('/:id/insertQuestions/:idcurso', insertQuestion)

router.get('/:id/curso/:idcurso/question/:idQuestion', findQuestion)

router.post('/:id/curso/:idcurso/insertAnswerOption/:idQuestion', insertAnswerOption)

router.post('/:id/curso/:idcurso/insertOptions/:idQuestion', insertOptions)

router.get('/:id/curso/:idcurso/getAnswer/:idQuestion', findAnswerOption)

router.get('/:id/curso/:idcurso/getOptions/:idQuestion', getOptions)

router.get('/:id/deleteCourse/:idcurso', deleteCourse)

router.get('/:id/:idcurso/material/:idmaterial', deleteMaterial)

router.get('/:id/questions/:idcurso', getAllQuestions)

router.get('/:id/course/:idcurso/question/:idpregunta', deleteOneQuestion)

router.post('/:id/course/:idcurso/question/:idpregunta/insertQuestion', updateQuestionText)

router.post('/:id/course/:idcurso/question/:idpregunta/insertAnswerOption', updateAnswerOption)

router.post('/:id/course/:idcurso/question/:idpregunta/insertOptions/:idoption', updateAllOptions)

// RUTAS PARA Operations

router.get('/operations', getOperations)

router.post('/newOperation', createOperation)

router.post('/updateOperation/:id', updateOperation)

router.post('/insertCollaborator/operation/:id', agregarCollaborators)

router.get('/deleteOperation/:id', deleteOperation)

router.get('/getCollaborators/operation/:id', getCollaboratorsIntoOperationID)

router.get('/findOperation/:id', findOperation)

export default router