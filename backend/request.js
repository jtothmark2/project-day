const bcrypt = require('bcrypt')
const crypto = require('crypto')

class Request{
    constructor(db, req, res){
        this.db = db
        this.req = req
        this.res = res

        this.params = req.params
        this.isLoggedIn = this.checkToken()
        this._id = -1
        this.didRespond = false
    }

    async checkToken(){
        if (!this.req.header['X-Token']) return false
        let result = await this.db.query("SELECT id FROM user WHERE token=?", [this.req.header['X-Token']])
        if (result.length == 0) return false

        this._id = result[0]['id']
        console.log(result)
        return true
    }

    async id(){
        await this.isLoggedIn
        return this._id
    }

    async respondJson(json, status=200){
        if (this.didRespond) return
        this.res.status(status).json(json)
    }

    async generateToken(length=64){
        
    }
}
module.exports = Request