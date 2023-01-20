import Collaborator from '../models/clerpremCollaborator.model.js'

import Administrator from '../models/clerpremAdmin.model.js'


//Models to COLLABORATOR
 
/* Traer todos los datos*/
export const getCollaborator = async (req, res) => {
  const collaborators = await Collaborator.find()
  res.json(collaborators)
}


/* Crear un registro*/
export const createCollaborator = async (req, res) => {
  const { numero_empleado, name, lastname, dateofbirthday, email, password, area, project, date_of_register, phone_number, emergency_phone_number, photo } = req.body

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
    user_type
  })
  await collaborator.save()
  res.send({ "code": 201, "message": "Record inserted successfully" })
}


/* Crear un registro de curso*/
export const createCourse = async (req, res) => {
  const { name_course } = req.body

  const collaborator = await Collaborator.findById(req.params.id)


  const course = ({
    name_course
  })
  await course.save(collaborator.courses_completed)

  res.send({ "code": 201, "message": "Course inserted successfully" })
}

/*Actualizar un registro*/
export const updateCollaborator = async (req, res) => {
  const { id } = req.params

  const collaboratorUpdated = await Collaborator.findByIdAndUpdate(id, req.body, {
    new: true
  })
  return res.json(collaboratorUpdated)
}


/*Eliminar un registro*/
export const deleteCollaborator = async (req, res) => {
  const collaborator = await Collaborator.findByIdAndDelete(req.params.id)

  if (!collaborator) {
    return res.status(404).json({
      "message": "Collaborator doesn´t exists"
    })
  }

  return res.send({ "code": 202, "message": "collaborator was deleted" })
}


/*Encontrar un registro por id*/
export const findCollaboratorID = async (req, res) => {
  const collaborator = await Collaborator.findById(req.params.id)

  if (!collaborator) {
    return res.status(404).json({
      "message": "Collaborator doesn´t exists"
    })
  }

  return res.json(collaborator)

}

/*Encontrar un registro para login*/
export const findCollaboratorNME = async (req, res) => {

  const collaborator = await Collaborator.findOne({ numero_empleado: (req.params.user), password: (req.params.password) })

  if (!collaborator) {
    return res.status(404).json({
      "message": "Collaborator doesn´t exists"
    })
  }

  return res.json(collaborator)

}


/*Encontrar un registro por numero de empleado*/
export const findCollaboratorNumber = async (req, res) => {

  const collaborator = await Collaborator.findOne({ numero_empleado: (req.params.user) })

  if (!collaborator) {
    return res.status(404).json({
      "message": "Collaborator doesn´t exists"
    })
  }

  return res.json(collaborator)

}


//Models to ADMINISTRATOR
 
/* Traer todos los datos*/
export const getAdministrators = async (req, res) => {
  const administrator = await Administrator.find()
  res.json(administrator)
}


/* Crear un registro*/
export const createAdministrator = async (req, res) => {
  const { numero_empleado, name, lastname, email, password, area, photo } = req.body

  const administrator = new Administrator({
    numero_empleado,
    name,
    lastname,
    email,
    password,
    area,
    photo,
  })
  await administrator.save()
  res.send({ "code": 201, "message": "Record inserted successfully" })
}


/*Actualizar un registro*/
export const updateAdministrator = async (req, res) => {
  const { id } = req.params

  const administratorUpdated = await Administrator.findByIdAndUpdate(id, req.body, {
    new: true
  })
  return res.json(administratorUpdated)
}


/*Eliminar un registro*/
export const deleteAdministrator = async (req, res) => {
  const administrator = await Administrator.findByIdAndDelete(req.params.id)

  if (!administrator) {
    return res.status(404).json({
      "message": "Administrator doesn´t exists"
    })
  }

  return res.send({ "code": 202, "message": "Administrator was deleted" })
}


/*Encontrar un registro por id*/
export const findAdministratorId = async (req, res) => {
  const administrator = await Administrator.findById(req.params.id)

  if (!administrator) {
    return res.status(404).json({
      "message": "Administrator doesn´t exists"
    })
  }

  return res.json(administrator)

}

/*Encontrar un registro para login*/
export const findAdministratorNME = async (req, res) => {

  const administrator = await Administrator.findOne({ numero_empleado: (req.params.user), password: (req.params.password) })

  if (!administrator) {
    return res.status(404).json({
      "message": "Administratpr doesn´t exists"
    })
  }

  return res.json(administrator)

}


/*Encontrar un registro por numero de empleado*/
export const findAdministratorNumber = async (req, res) => {

  const administrator = await Administrator.findOne({ numero_empleado: (req.params.user) })

  if (!administrator) {
    return res.status(404).json({
      "message": "Administrator doesn´t exists"
    })
  }

  return res.json(administrator)

}