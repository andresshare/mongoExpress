module.exports = function () { 
    var db = require('../libs/db-connection')()
    var Schema = require('mongoose').Schema
    var task = Schema({
        title: String,
        description: string,
        status: boolean
    })
    return db.model('tasks',Task)
    
}