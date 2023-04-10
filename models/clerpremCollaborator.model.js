import mongoose from 'mongoose'

const collaboratorSchema = mongoose.Schema({
  numero_empleado: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    requerid: false,
  },
  lastname: {
    type: String,
    requerid: false,
  },
  dateofbirthday: {
    type: String,
    requerid: false,
  },
  email: {
    type: String,
    requerid: false,
  },
  password: {
    type: String,
    requerid: false,
  },
  area: {
    type: String,
    requerid: false,
  },
  project: {
    type: String,
    requerid: false,
  },
  date_of_register: {
    type: String,
    requerid: false,
  },
  phone_number: {
    type: String,
    requerid: false,
  },
  emergency_phone_number: {
    type: String,
    requerid: false,
  },
  user_type: {
    type: String,
    requerid: false,
  },
  status: {
    type: String,
    required: false,
  },
  photo: {
    type: String,
    required: false,
  },
  vacancies_applied: [{
    name_vacancie: String,
    application_date: String
  }],
  operations_applied: [{
    id_operation: {
      type: String,
      required: false
    },
    project2: {
      type: String,
      required: false
    },
    porcent: {
      type: String,
      required: false
    }
  }],
  courses_completed: [{
    id_course: String,
    calf: String
  }],
  categories_completed: [{
    id_categorie: String
  }]
});

export default mongoose.model('Collaborator', collaboratorSchema)