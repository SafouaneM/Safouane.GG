import mysql from 'mysql2'
import dotenv from 'dotenv'


dotenv.config()

export const pool = mysql.createPool({ //a connection to a connection to the database
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
}).promise()


async function getUsers() {
    const [rows] = await pool.query('SELECT * FROM users')
    return rows
}

const users = await getUsers()
console.log(users)
