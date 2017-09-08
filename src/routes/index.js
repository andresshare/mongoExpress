const express = require('express')
const router = express.Router()
module.exports = router 

const model = require('../model/task')() 
router.get('/', (req, res) => {
    model.find({}, (err, tasks) => {

        if (err) throw err;
        res.render('index', {
            title: 'CRUD',
            task: tasks
        })
    })
})
 


