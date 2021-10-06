import dotenv from 'dotenv'

dotenv.config()

interface DatabaseData {
  host: string | undefined
  port: number | undefined
  user: string | undefined
  password: string | undefined
}

interface DatabaseConnection {
  connectionString: string | undefined
  ssl: any
}

interface Pool {
  min: number
  max: number
}

interface Migrations {
  tableName?: string
  directory: string
}

interface Seeds {
  directory: string
}

export interface Connection {
  client: string
  connection: DatabaseData | DatabaseConnection | string
  pool?: Pool
  migrations: Migrations
  seeds: Seeds
  useNullAsDefault?: boolean
}

export const development = {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST_DEVELOPMENT ?? 'db',
    port: parseInt(process.env.DB_PORT_DEVELOPMENT ?? '5432', 10),
    user: process.env.DB_USER_DEVELOPMENT ?? 'admin',
    password: process.env.DB_PASS_DEVELOPMENT ?? 'root'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  }
}
export const test = {
  client: 'sqlite3',
  connection: ':memory:',
  useNullAsDefault: true,
  migrations: {
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  }
}
export const production = {
  client: 'postgresql',
  connection: {
    connectionString: process.env.DATABASE_URL ?? '',
    ssl: { rejectUnauthorized: false }
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  }
}
