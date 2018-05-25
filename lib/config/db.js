export const MYSQL_CONFIG = {
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || '123456',
    database: 'scrum',
    // port: 3307
}
