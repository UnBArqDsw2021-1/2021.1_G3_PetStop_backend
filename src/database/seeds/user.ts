import { Knex } from 'knex'
import bcrypt from 'bcrypt'

const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS ?? '4', 10))
const password = bcrypt.hashSync('edvan123', salt)

export async function seed (knex: Knex): Promise<void> {
  const tableName = 'user'
  await knex(tableName).del()
  await knex(tableName).insert([
    { name: 'Edvan', password, email: 'edvan@gmail.com', description: '' }
  ])
};
