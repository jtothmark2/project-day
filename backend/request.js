const bcrypt = require('bcrypt')
const crypto = require('crypto')

class Request{
    constructor(db, req, res){
        this.db = db
        this.req = req
        this.res = res
        
        this.post = req.body
        this.params = req.params
        this.isLoggedIn = this.checkToken()
        this.id = -1
        this.didRespond = false
    }

    async checkToken(){
        if (!this.req.headers['x-token']) return false
        let result = await this.db.query("SELECT id FROM users WHERE token=?", [this.req.headers['x-token']])
        if (result.length == 0) return false

        this.id = result[0]['id']
        return true
    }
    
    respondJson(json, status=200){
        if (this.didRespond) return
        this.res.status(status).json(json)
    }

    respondMising(){
        this.respondJson({reason: "Missing fields."}, 400)
    }

    respond401(){
        this.respondJson({reason: "Invalid token."}, 401)
    }

    async generateToken(length=32){
        return crypto.randomBytes(length).toString('hex');
    }

    async generateHash(password){
        return bcrypt.hash(password, 10).catch(err => console.log('Error while generating password hash: ' + err))
    }

    async compareHash(password, hash){
        return await (bcrypt.compare(password, hash).catch(err => console.log('Error while comparing password hash: ' + err)))
    }

    validateFields(fieldList){
        for (const field of fieldList) {
            if (!this.post.hasOwnProperty(field)){
                return false
            }
        }
        return true
    }

    defaultFields(fieldList){
        fieldList.map(field => {
            if (!this.post.hasOwnProperty(field)) this.post[field] = ''
        })
    }


}
module.exports = Request