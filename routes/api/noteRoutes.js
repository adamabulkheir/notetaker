const router = require('express').Router()
const fs = require('fs')

router.get('/notes',(req, res)=>{
    fs.readFile('db/db.json',function(err, data){
        if (err) console.log(err)
        console.log(data)
        res.json(JSON.parse(data))
    }
    )
})

module.exports = router