import express from 'express'
import UserController from '../controller/UserController'

const UserRoutes = express.Router()

UserRoutes.post('/', UserController.Create)
UserRoutes.post('/login', UserController.Login)

export default UserRoutes
