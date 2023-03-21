import mongoose from 'mongoose'

const OperationsSchema = mongoose.Schema({

  name_of_operation: {
    type: String,
    required: false
  },
  project: {
    type: String,
    required: false
  },
  personal_register: [{
    no_collaborator: {
      type: String,
      required: false
    },
    porcent: {
      type: String,
      required: false
    }
  }]

});

export default mongoose.model('Operations', OperationsSchema)