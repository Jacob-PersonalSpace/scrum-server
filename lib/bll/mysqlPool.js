import mysql from 'mysql2/promise'

import { MYSQL_CONFIG } from '../config/db'

export default mysql.createPool(MYSQL_CONFIG)
