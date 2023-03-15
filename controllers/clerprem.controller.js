import Collaborator from '../models/clerpremCollaborator.model.js'

import Events from '../models/clerpremEvents.model.js'

import Alert from '../models/clerpremAlerts.model.js'

import Vacancies from '../models/clerpremVacancies.model.js'

import Projects from '../models/clerpremProjects.model.js'

import Categories from '../models/clerpremCategories.model.js'
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
    const { title, puesto, description, date_register, deadline, photo, status } = req.body

    const vacancie = new Vacancies({
      title,
      puesto,
      description,
      date_register,
      deadline,
      photo,
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



// Model Categories

/* Traer todos las Categorias*/
export const getCategories = async (req, res) => {

  try {
    const categories = await Categories.find()
    res.json(categories)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

/* Crear una Categoria*/
export const createCategorie = async (req, res) => {

  try {
    const { name_of_categorie, description, level, background, colorText } = req.body

    const categorie = new Categories({
      name_of_categorie,
      description,
      level,
      background,
      colorText
    })
    await categorie.save()
    res.send({ "code": 201, "message": "Categorie inserted successfully" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

/*Actualizar una Categoria*/
export const updateCategorie = async (req, res) => {

  try {
    const { id } = req.params

    const categorieUpdated = await Categories.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.json(categorieUpdated)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

/*Insertar curso nuevo a una categoria ya registrada*/
export const insertCourse = async (req, res) => {
  const { id } = req.params; // id del registro existente
  const { name_of_course } = req.body; // nuevos campos a agregar

  try {
    const registroExistente = await Categories.findById(id); // buscar el registro existente de la categoria
    if (!registroExistente) {
      return res.status(404).json({ mensaje: 'Categoria no encontrada' });
    }


    registroExistente.courses.push({ name_of_course: name_of_course });

    await registroExistente.save();
    res.json({ mensaje: 'Curso agregado correctamente', registro: registroExistente });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Error al agregar campos nuevos' });
  }
}



/*Eliminar una Categoria*/
export const deleteCategorie = async (req, res) => {

  try {
    const categorie = await Categories.findByIdAndDelete(req.params.id)

    if (!categorie) {
      return res.status(404).json({
        "message": "Categorie doesn´t exists"
      })
    }

    return res.send({ "code": 202, "message": "Categorie was deleted" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


/*Get all Courses by id of Categorie*/
export const findCoursesID = async (req, res) => {

  try {
    const courses = await Categories.findById(req.params.id)

    if (!courses) {
      return res.status(404).json({
        "message": "courses doesn´t exists"
      })
    }

    return res.json(courses.courses)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

/*Encontrar una Categoria por id */
export const findCategorie = async (req, res) => {

  try {
    const categorie = await Categories.findById(req.params.id)

    if (!categorie) {
      return res.status(404).json({
        "message": "Categorie doesn´t exists"
      })
    }

    return res.json(categorie)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}



/*  Encontrar un curso por su ID dentro de una categoria por ID */
export const findCursoByIdOnCategorieID = async (req, res) => {
  try {
    const categoria = await Categories.findById(req.params.id);

    // Verificamos que la categoría exista
    if (!categoria) {
      return res.status(404).json({ message: 'La categoría no existe' });
    }

    // Buscamos el curso por su id en el array de cursos de la categoría
    const curso = categoria.courses.find((c) => c._id == req.params.idcurso);

    // Verificamos que el curso exista
    if (!curso) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    res.status(200).json({ curso });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar el curso' });
  }
}




/* Insertar Material dentro de un curso */
export const insertMaterial = async (req, res) => {
  try {
    const categoria = await Categories.findById(req.params.id);
    const { name, documentType } = req.body; // nuevos campos a agregar
    // Verificamos que la categoría exista
    if (!categoria) {
      return res.status(404).json({ message: 'La categoría no existe' });
    }

    // Buscamos el curso por su id en el array de cursos de la categoría
    const curso = categoria.courses.find((c) => c._id == req.params.idcurso);

    // Verificamos que el curso exista
    if (!curso) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    curso.material.push({ name: name, documentType: documentType });

    await categoria.save();
    res.json({ mensaje: 'Registros agregados correctamente', registro: curso });


    //res.status(200).json({ curso });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar el curso' });
  }
}




/* Insertar Question Text dentro de un curso */
export const insertQuestion = async (req, res) => {
  try {
    const categoria = await Categories.findById(req.params.id);
    const { question_text } = req.body; // nuevos campos a agregar
    // Verificamos que la categoría exista
    if (!categoria) {
      return res.status(404).json({ message: 'La categoría no existe' });
    }

    // Buscamos el curso por su id en el array de cursos de la categoría
    const curso = categoria.courses.find((c) => c._id == req.params.idcurso);

    // Verificamos que el curso exista
    if (!curso) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    curso.questions.push({ question_text: question_text });

    await categoria.save();
    res.json({ mensaje: 'Registros agregados correctamente', registro: curso });


    //res.status(200).json({ curso });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar el curso' });
  }
}




/*  Encontrar una pregunta por su id dentro de una consulta de un curso por id y de la categoria por id*/

export const findQuestion = async (req, res) => {
  try {
    const categoria = await Categories.findById(req.params.id);

    // Verificamos que la categoría exista
    if (!categoria) {
      return res.status(404).json({ message: 'La categoría no existe' });
    }

    // Buscamos el curso por su id en el array de cursos de la categoría
    const curso = categoria.courses.find((c) => c._id == req.params.idcurso);

    // Verificamos que el curso exista
    if (!curso) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    const question = curso.questions.find((c) => c._id == req.params.idQuestion);

    if (!question) {
      return res.status(404).json({ message: 'La pregunta no existe' });
    }

    res.status(200).json({ question });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar la pregunta' });
  }
}




/*  Insertar answerOption dentro de una respuesta por id */

export const insertAnswerOption = async (req, res) => {
  try {
    const categoria = await Categories.findById(req.params.id);
    const { answerOption } = req.body; // nuevos campos a agregar

    // Verificamos que la categoría exista
    if (!categoria) {
      return res.status(404).json({ message: 'La categoría no existe' });
    }

    // Buscamos el curso por su id en el array de cursos de la categoría
    const curso = categoria.courses.find((c) => c._id == req.params.idcurso);

    // Verificamos que el curso exista
    if (!curso) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    const question = curso.questions.find((c) => c._id == req.params.idQuestion);

    if (!question) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    question.answerOption = req.body.answerOption;


    await categoria.save();
    res.json({ mensaje: 'Registros agregados correctamente', registro: question });

    //res.status(200).json({ question });


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar la pregunta' });
  }
}



/*  Insertar 4 Opciones para la pregunta por _id*/

export const insertOptions = async (req, res) => {
  try {
    const categoria = await Categories.findById(req.params.id);

    const { option1, option2, option3, option4 } = req.body; // nuevos campos a agregar

    // Verificamos que la categoría exista
    if (!categoria) {
      return res.status(404).json({ message: 'La categoría no existe' });
    }

    // Buscamos el curso por su id en el array de cursos de la categoría
    const curso = categoria.courses.find((c) => c._id == req.params.idcurso);

    // Verificamos que el curso exista
    if (!curso) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    const question = curso.questions.find((c) => c._id == req.params.idQuestion);

    if (!question) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    question.options.push({ option1: option1, option2: option2, option3: option3, option4: option4 });

    await categoria.save();
    res.json({ mensaje: 'Registros agregados correctamente', registro: question });

    //res.status(200).json({ question });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar la pregunta' });
  }
}



/*  Encontrar answerOption dentro de una pregunta por su id*/

export const findAnswerOption = async (req, res) => {
  try {
    const categoria = await Categories.findById(req.params.id);

    // Verificamos que la categoría exista
    if (!categoria) {
      return res.status(404).json({ message: 'La categoría no existe' });
    }

    // Buscamos el curso por su id en el array de cursos de la categoría
    const curso = categoria.courses.find((c) => c._id == req.params.idcurso);

    // Verificamos que el curso exista
    if (!curso) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    const question = curso.questions.find((c) => c._id == req.params.idQuestion);

    if (!question) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    const answer = question.answerOption;
    res.status(200).json({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar la pregunta' });
  }
}


/* Get all Options dentro de una pregunta por su id*/

export const getOptions = async (req, res) => {
  try {
    const categoria = await Categories.findById(req.params.id);

    // Verificamos que la categoría exista
    if (!categoria) {
      return res.status(404).json({ message: 'La categoría no existe' });
    }

    // Buscamos el curso por su id en el array de cursos de la categoría
    const curso = categoria.courses.find((c) => c._id == req.params.idcurso);

    // Verificamos que el curso exista
    if (!curso) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    const question = curso.questions.find((c) => c._id == req.params.idQuestion);

    if (!question) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    const options = question.options;
    res.status(200).json({ options });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar la pregunta' });
  }
}



/*  Eliminar un Curso dentro de una Categoria por ID de ambos */
export const deleteCourse = async (req, res) => {
  try {
    const categoria = await Categories.findById(req.params.id);

    // Verificamos que la categoría exista
    if (!categoria) {
      return res.status(404).json({ message: 'La categoría no existe' });
    }

    // Buscamos el índice del curso a eliminar
    const cursoIndex = categoria.courses.findIndex((c) => c._id == req.params.idcurso);

    // Verificamos que el curso exista
    if (cursoIndex === -1) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    // Eliminamos el curso del array de cursos de la categoría
    categoria.courses = categoria.courses.filter((c) => c._id != req.params.idcurso);
    await categoria.save();

    // Devolvemos el curso eliminado
    res.status(200).json({ message: 'Curso Eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar el curso' });
  }
}


/*  Eliminar un material por us _ID dentro de un curso y su categoria por su _ID correspondiente */
export const deleteMaterial = async (req, res) => {
  try {
    const categoria = await Categories.findById(req.params.id);

    // Verificamos que la categoría exista
    if (!categoria) {
      return res.status(404).json({ message: 'La categoría no existe' });
    }

    // Buscamos el curso por su id en el array de cursos de la categoría
    const curso = categoria.courses.find((c) => c._id == req.params.idcurso);

    // Verificamos que el curso exista
    if (!curso) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    // Encuentra el material en el array de materiales del curso.
    const material = curso.material.find((m) => m._id == req.params.idmaterial);


    if (!material) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    // Elimina el material del array de materiales del curso.
    curso.material.pull(material);

    // Guarda el curso actualizado en la base de datos.
    await categoria.save();

    res.status(200).json({ message: 'El material se eliminó correctamente.' });


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar el curso' });
  }
}


/*  Traer todas las preguntas registradas dentro de un curso por _IDCourse y _IDCategorie*/

export const getAllQuestions = async (req, res) => {
  try {
    const categoria = await Categories.findById(req.params.id);

    // Verificamos que la categoría exista
    if (!categoria) {
      return res.status(404).json({ message: 'La categoría no existe' });
    }

    // Buscamos el curso por su id en el array de cursos de la categoría
    const curso = categoria.courses.find((c) => c._id == req.params.idcurso);

    // Verificamos que el curso exista
    if (!curso) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

    const questions = curso.questions;

    res.status(200).json({ questions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar la pregunta' });
  }
}



/* Eliminar pregunta por _id de question_text & course & categorie*/

export const deleteOneQuestion = async (req, res) => {
  try {
    const categoria = await Categories.findById(req.params.id);

    // Verificamos que la categoría exista
    if (!categoria) {
      return res.status(404).json({ message: 'La categoría no existe' });
    }

    // Buscamos el curso por su id en el array de cursos de la categoría
    const curso = categoria.courses.find((c) => c._id == req.params.idcurso);

    // Verificamos que el curso exista
    if (!curso) {
      return res.status(404).json({ message: 'El curso no existe' });
    }

     // Buscamos la pregunta por su _id en el array de preguntas del curso
    const question = curso.questions.find((q) => q._id == req.params.idpregunta);

    // Verificamos que la pregunta exista
    if (!question) {
      return res.status(404).json({ message: 'La pregunta no existe' });
    }

    // Filtramos el array de preguntas del curso para eliminar la pregunta con el _id correspondiente
    curso.questions = curso.questions.filter((q) => q._id != req.params.idpregunta);

    // Guardamos los cambios en la base de datos
    await categoria.save();

    // Respondemos con un mensaje de éxito
    res.status(200).json({ message: 'La pregunta ha sido eliminada exitosamente' });

   /*
    const questions = curso.questions;

    res.status(200).json({ questions });
    */
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar la pregunta' });
  }
}



