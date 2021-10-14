import type { RequestHandler } from 'express'
import { createUser } from '../model/UserModel'
import View from '../view/ExpressRest'

interface Controller {
  Create: RequestHandler
}

const UserController: Controller = {
  async Create (req, res) {
    const view = new View(res)
    const { name, password, email, description } = req.body
    try {
      await createUser({
        name,
        password,
        email,
        description
      })
      view.Success({ message: 'teUser created!', object: {} })
    } catch (err) {
      view.BadRequest({})
    }
  }

}
export default UserController
