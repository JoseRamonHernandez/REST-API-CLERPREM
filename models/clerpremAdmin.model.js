import mongoose from 'mongoose'

const adminSchema = mongoose.Schema({
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
  photo: {
    type: String,
  },

  
})

export default mongoose.model('Administrator', adminSchema)