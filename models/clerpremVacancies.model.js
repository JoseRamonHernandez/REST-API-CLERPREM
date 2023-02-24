import mongoose from 'mongoose'

const VacanciesSchema = mongoose.Schema({
  
  title: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  date_register: {
    type: String,
    required: false
  },
  photo: {
    type: String,
    required: false
  },
  area: {
    type: String,
    required: false
  },
  applicators: [{
    number_collaborator: String,
    name_collaborator: String,
    area_collaborator: String,
    date_applied: String
  }]
});

export default mongoose.model('Vacancies', VacanciesSchema)