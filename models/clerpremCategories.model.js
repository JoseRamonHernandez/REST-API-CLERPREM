import mongoose from 'mongoose'

const CategoriesSchema = mongoose.Schema({
  
  name_of_categorie: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  level: {
    type: String,
    required: false
  },
  courses: [{
    name_of_course: String,
    material: [{
      name: String
    }],
    questions: [{
      question_text: String,
      options: [{
        option1: String,
        option2: String,
        option3: String,
        option4: String
      }],
      answerOption: String
    }]
  }]
});

export default mongoose.model('Categories', CategoriesSchema)