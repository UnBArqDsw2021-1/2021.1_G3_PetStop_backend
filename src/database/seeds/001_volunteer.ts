import { Knex } from 'knex'

export async function seed (knex: Knex): Promise<void> {
  const tableName = 'volunteer'
  await knex(tableName).del()
  await knex(tableName).insert([
    {
      telephone: '61912345678',
      userEmail: 'edvan@gmail.com',
      endereco: 'um endereço qualquer aí',
      dtNascimento: new Date('1995-05-21'),
      createdAt: new Date()
    }
  ])
};
