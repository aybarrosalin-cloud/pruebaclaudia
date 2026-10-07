import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    password: process.env.DBPASS,
    username: process.env.DBUSERNAME,
    database: process.env.DBNAME
})