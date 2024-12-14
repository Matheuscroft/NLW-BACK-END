import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import { env } from '../env'

console.log("env.DATABASE_URL")
console.log(env.DATABASE_URL)
export const client = postgres(env.DATABASE_URL)
export const db = drizzle(client, { schema, logger: true })