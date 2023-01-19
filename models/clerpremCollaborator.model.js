import mongoose from 'mongoose'

const collaboratorSchema = mongoose.Schema({
  numero_empleado: {
    type: String,
    unique: true
  },
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  dateofbirthday: {
    type: String,
  },
  email: {
    type: String,
    requerid: false,
  },
  password: {
    type: String,
  },
  area: {
    type: String,
  },
  project: {
    type: String,
  },
  date_of_register: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  emergency_phone_number: {
    type: String,
  },
  photo: {
    type: String,
  },
  
})

export default mongoose.model('Collaborator', collaboratorSchema)