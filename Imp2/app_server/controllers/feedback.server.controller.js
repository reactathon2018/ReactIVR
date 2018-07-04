// ./express-server/controllers/feedback.server.controller.js
import mongoose from 'mongoose';

//import models
import Feedback from '../models/feedback.server.model';

export const getFeedbacks = (req,res) => {
  Feedback.find().exec((err,feedbacks) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Feedbacks fetched successfully',feedbacks});
  });
}

export const addFeedback = (req,res) => {
  console.log(req.body);
  const newFeedback = new Feedback(req.body);
  newFeedback.save((err,feedback) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Feedback added successfully',feedback});
  })
}

export const updateFeedback = (req,res) => {
  Feedback.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,feedback) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(feedback);
    return res.json({'success':true,'message':'Updated successfully',feedback});
  })
}

export const getFeedback = (req,res) => {
  Feedback.find({_id:req.params.id}).exec((err,feedback) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(feedback.length){
      return res.json({'success':true,'message':'Feedback fetched by id successfully',feedback});
    }
    else{
      return res.json({'success':false,'message':'Feedback with the given id not found'});
    }
  })
}

export const deleteFeedback = (req,res) => {
  Feedback.findByIdAndRemove(req.params.id, (err,feedback) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':feedback.feedbackText+' deleted successfully'});
  })
}
