const mysql = require('mysql2')
const dotenv = require('dotenv')

class DB{
    constructor(){
        dotenv.config()
        const host = process.env.DB_HOST
        const user = process.env.DB_USER
        const pass = process.env.DB_PASS
        const db = process.env.DB_DATABASE

        this.conn = mysql.createConnection({host: host, user: user, password: pass, database: db})
        this.conn.connect(err =>{
            if (err) console.log(`Couldn't connect to MySql at host [${host}]. Error: ${err}`)
            else console.log(`Connected to MySql.`)
        })
    }

    async query(sql, params=[], single=false, all=false){
        let result = (await this.conn.promise().query(sql, params))
        if (!all) result = result[0]

        if (single && result.length > 0) return result[0]
        else if (single) return undefined
        return result
    }  

}

module.exports = DB