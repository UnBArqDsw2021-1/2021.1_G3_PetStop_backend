import Connection from '../database/connection'
import IUser from './interfaces/IUser'
import IVolunteer from './interfaces/IVolunteer'

export async function getUserByLogin (email: string): Promise<any[]> {
  const data = await await Connection('user')
    .where({ email })
    .select(['user.*', Connection.raw('to_json(volunteer.*) as volunteer')])
    .leftJoin('volunteer', 'user.email', 'volunteer.userEmail')

  return data
}

export async function createUser (user: IUser): Promise<any[]> {
  user.createdAt = new Date()
  const data = await Connection('user').insert(user)
  return data
}

export async function specializeUser (volunteer: IVolunteer): Promise<any[]> {
  volunteer.createdAt = new Date()
  const data = await Connection('volunteer').insert(volunteer)
  return data
}
