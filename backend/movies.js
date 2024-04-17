class MovieController{
    constructor(db){
        this.db = db

        this._movies = []
        this._indexed = {}
        this.isReady = this.load_movies()

        
    }

    async load_movies(){
        let sql = "SELECT * FROM movies"
        let result = await this.db.query(sql, [])

        this._movies = result.map((movie) => {
            this._indexed[movie.id] = movie
            return movie
        })

        return true
    }

    async getById(id){
        await this.isReady
        return this._indexed[id]
    }

    async getAll(){
        await this.isReady
        return this._movies
    }
}

module.exports = MovieController