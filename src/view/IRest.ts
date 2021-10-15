export interface restResponse {
  message?: String | undefined
  object?: Record<string, any>
}

interface IRest {
  Success: (response: restResponse) => undefined
  Created: (response: restResponse) => undefined
  NoContent: (response: restResponse) => undefined
  BadRequest: (response: restResponse) => undefined
  Unauthorized: (response: restResponse) => undefined
  NotFound: (response: restResponse) => undefined
  InternalServerError: (response: restResponse) => undefined
}

export default IRest
