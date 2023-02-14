import { Router } from 'express';

import UserController from '../controllers/user';
import VideoController from '../controllers/video';
import StreamController from '../controllers/stream';
import TagsController from '../controllers/Tags';

const ApiRouter = Router();

ApiRouter.use('/user', UserController);
ApiRouter.use('/video', VideoController);
ApiRouter.use('/stream', StreamController);
ApiRouter.use('/tags', TagsController);




export default ApiRouter;
