import mongoose from 'mongoose'

const alertSchema = mongoose.Schema({
  
  title: {
    type: String,
    requerid: false,
  },

  text: {
    type: String,
    requerid: false,
  },

  status:{
    type: String,
    required: false,
  }
  
},
{
  timestamps: true
  })

export default mongoose.model('Alert', alertSchema)