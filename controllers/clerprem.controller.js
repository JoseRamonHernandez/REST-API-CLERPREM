import Collaborator from '../models/clerpremCollaborator.model.js'

import Events from '../models/clerpremEvents.model.js'

import Alert from '../models/clerpremAlerts.model.js'

import Vacancies from '../models/clerpremVacancies.model.js'

import Projects from '../models/clerpremProjects.model.js'
//import {uploadImage} from '../utils/cloudinary.js'



//Models to COLLABORATOR

/* Traer todos los datos*/
export const getCollaborator = async (req, res) => {
  try {
    const collaborators = await Collaborator.find()
    res.json(collaborators)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


/* Crear un registro*/
export const createCollaborator = async (req, res) => {

  try {

    const { numero_empleado, name, lastname, dateofbirthday, email, password, area, project, date_of_register, phone_number, emergency_phone_number, user_type, status, photo } = req.body

    //console.log(req.files)

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
      user_type,
      status,
      photo
    })

    /*  if(req.files?.photo)
      {
       const result = await uploadImage(req.files.photo.tempFilePath)
       // console.log(result)
        collaborator.photo={
          public_id: result.public_id,
          secure_url: result.secure_url 
        }
      }*/

    await collaborator.save()
    res.send({ "code": 201, "message": "Record inserted successfully" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
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

  try {
    const { id } = req.params

    const collaboratorUpdated = await Collaborator.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.json(collaboratorUpdated)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


/*Eliminar un registro*/
export const deleteCollaborator = async (req, res) => {

  try {
    const collaborator = await Collaborator.findByIdAndDelete(req.params.id)

    if (!collaborator) {
      return res.status(404).json({
        "message": "Collaborator doesn´t exists"
      })
    }

    return res.send({ "code": 202, "message": "collaborator was deleted" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


/*Encontrar un registro por id*/
export const findCollaboratorID = async (req, res) => {

  try {
    const collaborator = await Collaborator.findById(req.params.id)

    if (!collaborator) {
      return res.status(404).json({
        "message": "Collaborator doesn´t exists"
      })
    }

    return res.json(collaborator)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

/*Encontrar un registro para login*/
export const findCollaboratorNME = async (req, res) => {

  try {
    const collaborator = await Collaborator.findOne({ numero_empleado: (req.params.user), password: (req.params.password) })

    if (!collaborator) {
      return res.status(404).json({
        "message": "Collaborator doesn´t exists"
      })
    }

    return res.json(collaborator)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}


/*Encontrar un registro por numero de empleado*/
export const findCollaboratorNumber = async (req, res) => {

  try {
    const collaborator = await Collaborator.findOne({ numero_empleado: (req.params.user) })

    if (!collaborator) {
      return res.status(404).json({
        "message": "Collaborator doesn´t exists"
      })
    }

    return res.json(collaborator)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}


/*Encontrar un registro por área*/
export const findCollaboratorArea = async (req, res) => {

  try {
    const collaborator = await Collaborator.find({ area: (req.params.user) })

    if (!collaborator) {
      return res.status(404).json({
        "message": "Collaborator doesn´t exists"
      })
    }

    return res.json(collaborator)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

/*Encontrar un registro por numero de contraseña*/
export const findCollaboratorPassword = async (req, res) => {

  try {
    const collaborator = await Collaborator.find({ password: (req.params.user) })

    if (!collaborator) {
      return res.status(404).json({
        "message": "Collaborator doesn´t exists"
      })
    }

    return res.json(collaborator)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

/*Encontrar un registro por numero de area*/
export const findForType = async (req, res) => {

  try {
    const collaborator = await Collaborator.find({ user_type: (req.params.user) })

    if (!collaborator) {
      return res.status(404).json({
        "message": "Collaborator doesn´t exists"
      })
    }

    return res.json(collaborator)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

/*Aplicar a una nueva vacante*/
export const vacanciesApplied = async (req, res) => {
  const { id } = req.params; // id del colaborador existente
  const { name_vacancie, application_date } = req.body; // nuevo nombre_de_vacante y Fecha de aplicación

  try {
    const registroExistente = await Collaborator.findById(id); // buscar el registro existente
    if (!registroExistente) {
      return res.status(404).json({ mensaje: 'Colaborador no encontrado' });
    }
    /*
    console.log(subtitulo);
    console.log(indice);
    console.log(registroExistente.subtitulos);
    */

    registroExistente.vacancies_applied.push({ name_vacancie: name_vacancie, application_date: application_date });

    await registroExistente.save();
    res.json({ mensaje: 'Nueva Vacante registrada para el colaborador' });

  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Error al agregar nuevos campos' });
  }
}

/*Get all vacancies into collaborator*/
export const showApplied = async (req, res) => {

  try {
    const vacancie = await Collaborator.findById(req.params.id)

    if (!vacancie) {
      return res.status(404).json({
        "message": "Vacancie doesn´t exists"
      })
    }

    return res.json(vacancie.vacancies_applied)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}


// Model Events

/* Traer todos los Eventos*/
export const getEvents = async (req, res) => {

  try {
    const events = await Events.find()
    res.json(events)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

/* Crear un evento*/
export const createEvent = async (req, res) => {

  try {
    const { title, photo } = req.body

    const event = new Events({
      title,
      photo
    })
    await event.save()
    res.send({ "code": 201, "message": "Event inserted successfully" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

/*Actualizar un evento*/
export const updateEvent = async (req, res) => {

  try {
    const { id } = req.params

    const eventUpdated = await Events.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.json(eventUpdated)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


/*Eliminar un evento*/
export const deleteEvent = async (req, res) => {

  try {
    const event = await Events.findByIdAndDelete(req.params.id)

    if (!event) {
      return res.status(404).json({
        "message": "Event doesn´t exists"
      })
    }

    return res.send({ "code": 202, "message": "Event was deleted" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


/*Encontrar un evento por id*/
export const findEventID = async (req, res) => {

  try {
    const event = await Events.findById(req.params.id)

    if (!event) {
      return res.status(404).json({
        "message": "Event doesn´t exists"
      })
    }

    return res.json(event)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}


// Model Alerts

/* Traer todos los Avisos*/
export const getAlert = async (req, res) => {

  try {
    const alert = await Alert.find()
    res.json(alert)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

/* Crear un Aviso*/
export const createAlert = async (req, res) => {

  try {
    const { title, level, photo, status } = req.body

    const alert = new Alert({
      title,
      level,
      photo,
      status
    })
    await alert.save()
    res.send({ "code": 201, "message": "Alert inserted successfully" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

/*Actualizar un Aviso*/
export const updateAlert = async (req, res) => {

  try {
    const { id } = req.params

    const alertUpdated = await Alert.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.json(alertUpdated)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


/*Eliminar un Aviso*/
export const deleteAlert = async (req, res) => {

  try {
    const alert = await Alert.findByIdAndDelete(req.params.id)

    if (!alert) {
      return res.status(404).json({
        "message": "Alert doesn´t exists"
      })
    }

    return res.send({ "code": 202, "message": "Alert was deleted" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


/*Encontrar un Aviso por id*/
export const findAlertID = async (req, res) => {

  try {
    const alert = await Alert.findById(req.params.id)

    if (!alert) {
      return res.status(404).json({
        "message": "Alert doesn´t exists"
      })
    }

    return res.json(alert)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

/*Encontrar un Aviso por status (true)*/
export const findAlertsByStatus = async (req, res) => {

  try {
    const alerts = await Alert.find({ status: (req.params.status) })

    if (!alerts) {
      return res.status(404).json({
        "message": "alert doesn´t exists"
      })
    }

    return res.json(alerts)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}


// Model Vacancies

/* Traer todos los Vacancies*/
export const getVacancies = async (req, res) => {

  try {
    const vacancie = await Vacancies.find()
    res.json(vacancie)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

/* Crear una Vacancies*/
export const createVacancies = async (req, res) => {

  try {
    const { title, puesto, description, date_register, deadline, photo, area, status } = req.body

    const vacancie = new Vacancies({
      title,
      puesto,
      description,
      date_register,
      deadline,
      photo,
      area,
      status
    })
    await vacancie.save()
    res.send({ "code": 201, "message": "Vacancie inserted successfully" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

/*Actualizar una Vacancies*/
export const updateVacancies = async (req, res) => {

  try {
    const { id } = req.params

    const vacancieUpdated = await Vacancies.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.json(vacancieUpdated)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

/*Actualizar una Vacancies para registros*/
export const agregarVacancies = async (req, res) => {
  const { id } = req.params; // id del registro existente
  const { number_collaborator, name_collaborator, area_collaborator, date_applied } = req.body; // nuevos campos a agregar

  try {
    const registroExistente = await Vacancies.findById(id); // buscar el registro existente
    if (!registroExistente) {
      return res.status(404).json({ mensaje: 'Vacante no encontrada' });
    }


    registroExistente.applicators.push({ number_collaborator: number_collaborator, name_collaborator: name_collaborator, area_collaborator: area_collaborator, date_applied: date_applied });

    await registroExistente.save();
    res.json({ mensaje: 'Registros agregados correctamente', registro: registroExistente });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Error al agregar campos nuevos' });
  }
}



/*Eliminar una Vacancies*/
export const deleteVacancies = async (req, res) => {

  try {
    const vacancie = await Vacancies.findByIdAndDelete(req.params.id)

    if (!vacancie) {
      return res.status(404).json({
        "message": "Vacancie doesn´t exists"
      })
    }

    return res.send({ "code": 202, "message": "Vacancie was deleted" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


/*Encontrar una Vacancies por id obteniendo el array applicators*/
export const findVacanciesID = async (req, res) => {

  try {
    const vacancie = await Vacancies.findById(req.params.id)

    if (!vacancie) {
      return res.status(404).json({
        "message": "Vacancie doesn´t exists"
      })
    }

    return res.json(vacancie.applicators)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

/*Encontrar una Vacancies por id */
export const findVacancie = async (req, res) => {

  try {
    const vacancie = await Vacancies.findById(req.params.id)

    if (!vacancie) {
      return res.status(404).json({
        "message": "Vacancie doesn´t exists"
      })
    }

    return res.json(vacancie)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}


// Model Projects

/* Traer todos los Projects*/
export const getProjects = async (req, res) => {

  try {
    const projects = await Projects.find()
    res.json(projects)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

/* Crear un Project*/
export const createProject = async (req, res) => {

  try {
    const { name, description, date_start, deadline, authorized_template } = req.body

    const project = new Projects({
      name,
      description,
      date_start,
      deadline,
      authorized_template
    })
    await project.save()
    res.send({ "code": 201, "message": "Project inserted successfully" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

/*Actualizar un Project*/
export const updateProject = async (req, res) => {

  try {
    const { id } = req.params

    const projectUpdated = await Projects.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.json(projectUpdated)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


/*Eliminar un Project*/
export const deleteProject = async (req, res) => {

  try {
    const project = await Projects.findByIdAndDelete(req.params.id)

    if (!project) {
      return res.status(404).json({
        "message": "Project doesn´t exists"
      })
    }

    return res.send({ "code": 202, "message": "Project was deleted" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


/*Encontrar un Project por id*/
export const findProjectID = async (req, res) => {

  try {
    const project = await Projects.findById(req.params.id)

    if (!project) {
      return res.status(404).json({
        "message": "Project doesn´t exists"
      })
    }

    return res.json(project)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}
