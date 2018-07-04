// ./express-server/controllers/job.server.controller.js
import mongoose from 'mongoose';

//import models
import Job from '../models/job.server.model';

export const getJobs = (req,res) => {
	
  Job.find().exec((err,jobs) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Jobs fetched successfully',jobs});
  });

// export const addTodo = (req,res) => {
//   console.log(req.body);
//   const newTodo = new Todo(req.body);
//   newTodo.save((err,todo) => {
//     if(err){
//     return res.json({'success':false,'message':'Some Error'});
//     }

//     return res.json({'success':true,'message':'Todo added successfully',todo});
//   })
// }

// export const updateTodo = (req,res) => {
//   Todo.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,todo) => {
//     if(err){
//     return res.json({'success':false,'message':'Some Error','error':err});
//     }
//     console.log(todo);
//     return res.json({'success':true,'message':'Updated successfully',todo});
//   })
// }

// export const getTodo = (req,res) => {
//   Todo.find({_id:req.params.id}).exec((err,todo) => {
//     if(err){
//     return res.json({'success':false,'message':'Some Error'});
//     }
//     if(todo.length){
//       return res.json({'success':true,'message':'Todo fetched by id successfully',todo});
//     }
//     else{
//       return res.json({'success':false,'message':'Todo with the given id not found'});
//     }
//   })
// }

// export const deleteTodo = (req,res) => {
//   Todo.findByIdAndRemove(req.params.id, (err,todo) => {
//     if(err){
//     return res.json({'success':false,'message':'Some Error'});
//     }

//     return res.json({'success':true,'message':todo.todoText+' deleted successfully'});
//   })
}
