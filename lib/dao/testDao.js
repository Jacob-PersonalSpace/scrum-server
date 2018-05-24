import mysql from 'mysql'
import { MYSQL_CONFIG } from '../config/db'
import { test as testSql } from './testSqlMapping'

// 使用连接池，提升性能
const pool = mysql.createPool(MYSQL_CONFIG)

// 向前台返回JSON方法的简单封装
const jsonWrite = (res, ret) => {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

export const getCount = (req, res, next) => {
    pool.getConnection((err, connection) => {
        console.log('??', err)

        // 获取前台页面传过来的参数
        const param = req.query || req.params;

        connection.query(testSql.query, (err, result) => {
            if (result) {
                result = {
                    code: 200,
                    msg: result
                };
            }

            // 以json形式，把操作结果返回给前台页面
            jsonWrite(res, result);

            // 释放连接 
            connection.release();
        });
    });
}
