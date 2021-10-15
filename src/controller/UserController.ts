import bcrypt from 'bcrypt'
import type { RequestHandler } from 'express'
import { createUser, getUserByLogin } from '../model/UserModel'
import generateToken from '../model/utils/generateToken'
import View from '../view/ExpressRest'

interface Controller {
  Create: RequestHandler
  Login: RequestHandler
}

const UserController: Controller = {
  async Create (req, res) {
    const view = new View(res)
    const { name, password, email, description } = req.body
    try {
      const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS ?? '4', 10))
      const hash = bcrypt.hashSync(password, salt)
      await createUser({
        name,
        password: hash,
        email,
        description
      })
      view.Success({ message: 'User created!' })
    } catch (err) {
      if (err?.detail.includes('Key (email)')) { return view.BadRequest({ message: 'Email already exists' }) }
      return view.InternalServerError({})
    }
  },
  async Login (req, res) {
    const view = new View(res)
    try {
      const [user] = await getUserByLogin(req.body.email)
      if (!user) throw new Error('Wrong email or password')
      if (!bcrypt.compareSync(req.body.password, user.password)) throw new Error('Wrong email or password')

      const { password, ...safeUser } = user
      const token = generateToken({ email: user.email })

      view.Success({ message: 'Login succeeded', object: { ...safeUser, token } })
    } catch (err) {
      if (err.message === 'Wrong email or password') return view.Unauthorized({ message: err.message })
      return view.InternalServerError({})
    }
  }

}
export default UserController
