import mongoose from 'mongoose'

const EventsSchema = mongoose.Schema({
  
  title: {
    type: String,
    requerid: false,
  },

  subtitle: {
    type: String,
    requerid: false,
  },

  text: {
    type: String,
    requerid: false,
  },

  time: {
    type: String,
    requerid: false,
  },

  date: {
    type: String,
    requerid: false,
  },

  place: {
    type: String,
    requerid: false,
  },
  
})

export default mongoose.model('Events', EventsSchema)