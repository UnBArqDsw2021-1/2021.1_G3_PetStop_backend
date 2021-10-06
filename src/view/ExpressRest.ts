import { Response } from 'express'
import IRest, { restResponse } from './IRest'

class ExpressRest implements IRest {
  res: Response

  constructor (res: Response) {
    this.res = res
  }

  _ResponseBase (statusNumber: number): (obj: restResponse) => undefined {
    return function ({ object, message }: restResponse): undefined {
      let result
      if (object) { result = message ? { message, result: object } : { result: object } } else { result = message ? { message } : {} }

      return this.res.status(statusNumber).json(result)
    }
  }

  Success = this._ResponseBase(200)
  Created = this._ResponseBase(201)
  NoContent = this._ResponseBase(204)
  BadRequest = this._ResponseBase(400)
  Unauthorized = this._ResponseBase(401)
  NotFound = this._ResponseBase(404)
  InternalServerError = this._ResponseBase(500)
}

export default ExpressRest
