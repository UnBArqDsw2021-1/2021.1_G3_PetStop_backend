import jwt from 'jsonwebtoken'

function generateToken (params: Record<string, any> = {}): string {
  const secret = process.env.SECRET ?? 'segredo'
  return jwt.sign(params, secret, {
    expiresIn: 3600
  })
}

export default generateToken
