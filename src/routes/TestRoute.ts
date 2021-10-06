import { Router } from 'express'

import Controller from '../controller/TestController'

const Route = Router()

Route.post('/', Controller.Test)

export default Route
