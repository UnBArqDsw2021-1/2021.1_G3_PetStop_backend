import express from 'express'
import UserController from '../controller/UserController'
import tokenMiddleware from '../model/middlewares/tokenMiddleware'

const UserRoutes = express.Router()

UserRoutes.post('/', UserController.Create)
UserRoutes.post('/login', UserController.Login)
UserRoutes.put('/specialize', tokenMiddleware, UserController.Specialize)

export default UserRoutes
