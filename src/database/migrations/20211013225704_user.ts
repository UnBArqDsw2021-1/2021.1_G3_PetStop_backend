import { Knex } from 'knex'

const tableName = 'user'

export async function up (knex: Knex): Promise<void> {
  return await knex.schema.createTable(tableName, (table) => {
    table.string('name').notNullable()
    table.string('email').primary()
    table.string('password').notNullable()
    table.string('description').notNullable()
    table.string('createdAt').notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return await knex.schema.dropTable(tableName)
}
