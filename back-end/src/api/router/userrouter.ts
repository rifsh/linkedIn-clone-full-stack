import exp from 'express'
import {userController} from '../controllers/userController'
import { userRouteProtector } from '../middlewares/routeProtectorMiddleware';
import { userProfileimgUpload } from '../middlewares/imageUploading';

export const userRouter = exp.Router();


userRouter
.use(userRouteProtector)
.get('/user-by-id/:id',userController.userById)
.put('/user-profile/:id',userProfileimgUpload,userController.userProfile)