import knex from 'knex'
import * as knexfile from '../../knexfile'

let config: knexfile.Connection = knexfile.development
if (process.env.NODE_ENV === 'production') config = knexfile.production
else if (process.env.NODE_ENV === 'test') config = knexfile.test

const KnexConnection = knex(config)

export default KnexConnection
