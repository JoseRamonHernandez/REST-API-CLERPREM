import Collaborator from '../models/clerpremCollaborator.model.js'

import Events from '../models/clerpremEvents.model.js'

import Alert from '../models/clerpremAlerts.model.js'



//Models to COLLABORATOR
 
/* Traer todos los datos*/
export const getCollaborator = async (req, res) => {
  try{
  const collaborators = await Collaborator.find()
  res.json(collaborators)
  }catch(error){
    return res.status(500).json({message: error.message})
  }
}


/* Crear un registro*/
export const createCollaborator = async (req, res) => {

try{
  
  const { numero_empleado, name, lastname, dateofbirthday, email, password, area, project, date_of_register, phone_number, emergency_phone_number, photo, user_type, status } = req.body

  const collaborator = new Collaborator({
    numero_empleado,
    name,
    lastname,
    dateofbirthday,
    email,
    password,
    area,
    project,
    date_of_register,
    phone_number,
    emergency_phone_number,
    photo,
    user_type,
    status
  })
  await collaborator.save()
  res.send({ "code": 201, "message": "Record inserted successfully" })
  }catch(error){
    return res.status(500).json({message: error.message})
  }
}


/* Crear un registro de curso*/
/*
export const createCourse = async (req, res) => {
  const { name_course } = req.body

  const collaborator = await Collaborator.findById(req.params.id)


  const course = ({
    name_course
  })
  await course.save(collaborator.courses_completed)

  res.send({ "code": 201, "message": "Course inserted successfully" })
}
*/

/*Actualizar un registro*/
export const updateCollaborator = async (req, res) => {

  try{
  const { id } = req.params

  const collaboratorUpdated = await Collaborator.findByIdAndUpdate(id, req.body, {
    new: true
  })
  return res.json(collaboratorUpdated)
    }catch(error){
    return res.status(500).json({message: error.message})
  }
}


/*Eliminar un registro*/
export const deleteCollaborator = async (req, res) => {

  try{
  const collaborator = await Collaborator.findByIdAndDelete(req.params.id)

  if (!collaborator) {
    return res.status(404).json({
      "message": "Collaborator doesn´t exists"
    })
  }

  return res.send({ "code": 202, "message": "collaborator was deleted" })
    }catch(error){
    return res.status(500).json({message: error.message})
  }
}


/*Encontrar un registro por id*/
export const findCollaboratorID = async (req, res) => {

  try{
  const collaborator = await Collaborator.findById(req.params.id)

  if (!collaborator) {
    return res.status(404).json({
      "message": "Collaborator doesn´t exists"
    })
  }

  return res.json(collaborator)
    }catch(error){
    return res.status(500).json({message: error.message})
  }

}

/*Encontrar un registro para login*/
export const findCollaboratorNME = async (req, res) => {

  try{
  const collaborator = await Collaborator.findOne({ numero_empleado: (req.params.user), password: (req.params.password) })

  if (!collaborator) {
    return res.status(404).json({
      "message": "Collaborator doesn´t exists"
    })
  }

  return res.json(collaborator)
    }catch(error){
    return res.status(500).json({message: error.message})
  }

}


/*Encontrar un registro por numero de empleado*/
export const findCollaboratorNumber = async (req, res) => {

  try{
  const collaborator = await Collaborator.findOne({ numero_empleado: (req.params.user) })

  if (!collaborator) {
    return res.status(404).json({
      "message": "Collaborator doesn´t exists"
    })
  }

  return res.json(collaborator)
    }catch(error){
    return res.status(500).json({message: error.message})
  }

}


/*Encontrar un registro por área*/
export const findCollaboratorArea = async (req, res) => {

  try{
  const collaborator = await Collaborator.find({ area: (req.params.user) })

  if (!collaborator) {
    return res.status(404).json({
      "message": "Collaborator doesn´t exists"
    })
  }

  return res.json(collaborator)
    }catch(error){
    return res.status(500).json({message: error.message})
  }

}

    /*Encontrar un registro por numero de contraseña*/
export const findCollaboratorPassword = async (req, res) => {

  try{
  const collaborator = await Collaborator.find({ password: (req.params.user) })

  if (!collaborator) {
    return res.status(404).json({
      "message": "Collaborator doesn´t exists"
    })
  }

  return res.json(collaborator)
    }catch(error){
    return res.status(500).json({message: error.message})
  }

}

/*Encontrar un registro por numero de area*/
export const findForType = async (req, res) => {

  try{
  const collaborator = await Collaborator.find({ user_type: (req.params.user) })

  if (!collaborator) {
    return res.status(404).json({
      "message": "Collaborator doesn´t exists"
    })
  }

  return res.json(collaborator)
    }catch(error){
    return res.status(500).json({message: error.message})
  }

}


// Model Events

/* Traer todos los Eventos*/
export const getEvents = async (req, res) => {

  try{
  const events = await Events.find()
  res.json(events)
    }catch(error){
    return res.status(500).json({message: error.message})
  }
}

/* Crear un evento*/
export const createEvent = async (req, res) => {

  try{
  const { title, subtitle, text, time, date, place } = req.body

  const event = new Events({
    title,
    subtitle,
    text,
    time,
    date,
    place
  })
  await event.save()
  res.send({ "code": 201, "message": "Event inserted successfully" })
  }catch(error){
    return res.status(500).json({message: error.message})
  }
}

/*Actualizar un evento*/
export const updateEvent = async (req, res) => {

  try{
  const { id } = req.params

  const eventUpdated = await Events.findByIdAndUpdate(id, req.body, {
    new: true
  })
  return res.json(eventUpdated)
    }catch(error){
    return res.status(500).json({message: error.message})
  }
}


/*Eliminar un evento*/
export const deleteEvent = async (req, res) => {

  try{
  const event = await Events.findByIdAndDelete(req.params.id)

  if (!event) {
    return res.status(404).json({
      "message": "Event doesn´t exists"
    })
  }

  return res.send({ "code": 202, "message": "Event was deleted" })
    }catch(error){
    return res.status(500).json({message: error.message})
  }
}


/*Encontrar un evento por id*/
export const findEventID = async (req, res) => {

  try{
  const event = await Events.findById(req.params.id)

  if (!event) {
    return res.status(404).json({
      "message": "Event doesn´t exists"
    })
  }

  return res.json(event)
    }catch(error){
    return res.status(500).json({message: error.message})
  }

}


// Model Alerts

/* Traer todos los Avisos*/
export const getAlert = async (req, res) => {

  try{
  const alert = await Alert.find()
  res.json(alert)
    }catch(error){
    return res.status(500).json({message: error.message})
  }
}

/* Crear un Aviso*/
export const createAlert = async (req, res) => {

  try{
  const { title, text } = req.body

  const alert = new Alert({
    title,
    text
  })
  await alert.save()
  res.send({ "code": 201, "message": "Alert inserted successfully" })
  }catch(error){
    return res.status(500).json({message: error.message})
  }
}

/*Actualizar un Aviso*/
export const updateAlert = async (req, res) => {

  try{
  const { id } = req.params

  const alertUpdated = await Alert.findByIdAndUpdate(id, req.body, {
    new: true
  })
  return res.json(alertUpdated)
    }catch(error){
    return res.status(500).json({message: error.message})
  }
}


/*Eliminar un Aviso*/
export const deleteAlert = async (req, res) => {

  try{
  const alert = await Alert.findByIdAndDelete(req.params.id)

  if (!alert) {
    return res.status(404).json({
      "message": "Alert doesn´t exists"
    })
  }

  return res.send({ "code": 202, "message": "Alert was deleted" })
    }catch(error){
    return res.status(500).json({message: error.message})
  }
}


/*Encontrar un Aviso por id*/
export const findAlertID = async (req, res) => {

  try{
  const alert = await Alert.findById(req.params.id)

  if (!alert) {
    return res.status(404).json({
      "message": "Alert doesn´t exists"
    })
  }

  return res.json(alert)
    }catch(error){
    return res.status(500).json({message: error.message})
  }

}
