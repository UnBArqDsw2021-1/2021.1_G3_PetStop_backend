import Connection from '../database/connection'
import IUser from './interfaces/IUser'

export async function getUserByLogin (email: string): Promise<any[]> {
  const data = await Connection('user').where({ email })
  return data
}

export async function createUser (user: IUser): Promise<any[]> {
  user.createdAt = new Date()
  const data = await Connection('user').insert(user)
  return data
}
