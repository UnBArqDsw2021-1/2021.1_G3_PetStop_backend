import type { RequestHandler } from 'express'
import View from '../view/ExpressRest'

interface IController {
  Test: RequestHandler
}

const Controller: IController = {
  async Test (req, res) {
    const view = new View(res)
    const { test } = req.body

    try {
      if (!test) throw new Error('test de erro at')

      view.Success({ message: 'test at', object: { test } })
    } catch (error) {
      view.InternalServerError({})
    }
  }
}

export default Controller
