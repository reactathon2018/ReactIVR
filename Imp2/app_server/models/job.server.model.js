import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  jobTitle: String,
  jobDesc: String
});

export default mongoose.model('Job', Schema);
