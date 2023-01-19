import Collaborator from '../models/clerpremCollaborator.model.js'

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
    photo
  })
  await collaborator.save()
  res.send({ "code": 201, "message": "Record inserted successfully" })
}


/* Crear un registro de curso*/
export const createCourse = async (req, res) => {
  const { name_course} = req.body

  const collaborator = await Collaborator.findById(req.params.id)

  
  const course = ({
    name_course
  }) 
  await course.save(collaborator.courses_completed)

  res.send({ "code": 201, "message": "Course inserted successfully" })
}

/*Actualizar un registro*/
export const updateCollaborator = async (req, res) => {
  const {id} = req.params

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

  return res.json(collaborator.courses_completed)

}

/*Encontrar un registro por numero de empleado*/
export const findCollaboratorNME = async (req, res) => {
 
  const collaborator = await Collaborator.findOne({numero_empleado: (req.params.user), password: (req.params.password)} )

  if (!collaborator) {
    return res.status(404).json({
      "message": "Collaborator doesn´t exists"
    })
  }

  return res.json(collaborator)

}