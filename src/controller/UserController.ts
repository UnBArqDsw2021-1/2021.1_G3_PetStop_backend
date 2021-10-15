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
      view.Success({ message: 'User created!' })
    } catch (err) {
      if (err?.detail.includes('Key (email)')) { return view.BadRequest({ message: 'Email already exists' }) }
      return view.InternalServerError({})
    }
  }

}
export default UserController
