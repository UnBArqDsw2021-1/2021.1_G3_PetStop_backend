import Connection from '../database/connection'
import IUser from './interfaces/IUser'

export async function getUserByLogin (user: IUser): Promise<any[]> {
  const data = await Connection('user').where({ email: user.email, password: user.password })
  return data
}

export async function createUser (user: IUser): Promise<any[]> {
  user.createdAt = new Date()
  const data = await Connection('user').insert(user)
  return data
}
