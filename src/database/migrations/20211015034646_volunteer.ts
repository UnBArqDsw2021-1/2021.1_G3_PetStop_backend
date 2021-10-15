import { Knex } from 'knex'

const tableName = 'volunteer'

export async function up (knex: Knex): Promise<void> {
  return await knex.schema.createTable(tableName, (table) => {
    table.string('telephone').primary()
    table.string('userEmail').notNullable().unique().references('user')
    table.string('endereco').notNullable()
    table.date('dtNascimento').notNullable()
    table.dateTime('createdAt').notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return await knex.schema.dropTable(tableName)
}
