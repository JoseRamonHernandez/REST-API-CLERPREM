import mongoose from 'mongoose'

const EventsSchema = mongoose.Schema({
  
  title: {
    type: String,
    requerid: false,
  },

  photo: {
    type: String,
    requerid: false,
  }
},
{
  timestamps: true
  })

export default mongoose.model('Events', EventsSchema)