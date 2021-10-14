import express from 'express'
import UserController from '../controller/UserController'

const UserRoutes = express.Router()

UserRoutes.post('/', UserController.Create)

export default UserRoutes
