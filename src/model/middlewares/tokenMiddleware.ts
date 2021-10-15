import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'

const tokenMiddleware: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization

  const secret = process.env.SECRET ?? 'segredo'

  if (!authHeader) {
    return res.status(401).send({ error: 'Nenhum token providenciado' })
  }

  const parts = authHeader.split(' ')

  if (!(parts.length === 2)) {
    return res.status(401).send({ error: 'Bad "Authorization" header format' })
  }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) { return res.status(401).send({ error: 'Bad token format' }) }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) { return res.status(401).send({ error: 'Invalid Token', message: err.message }) }
    if (decoded) { req.id = decoded.id }

    return next()
  })
}

export default tokenMiddleware
