// ./express-server/routes/feedback.server.route.js
import express from 'express';

//import controller file
import * as feedbackController from '../controllers/feedback.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/')
      .get(feedbackController.getFeedbacks)
      .post(feedbackController.addFeedback)
      .put(feedbackController.updateFeedback);

router.route('/:id')
      .get(feedbackController.getFeedback)
      .delete(feedbackController.deleteFeedback);

export default router;