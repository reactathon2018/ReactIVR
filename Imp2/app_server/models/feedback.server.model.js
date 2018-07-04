import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  feedbackText: String,
  feedbackDesc: String
});

export default mongoose.model('Feedback', Schema);
