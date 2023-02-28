import mongoose from 'mongoose'

const ProjectsSchema = mongoose.Schema({
  
  name: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  date_start: {
    type: String,
    required: false
  },
  deadline:{
    type: String,
    required: false
  },
  authorized_template: {
    type: String,
    required: false
  },
 
});

export default mongoose.model('Projects', ProjectsSchema)