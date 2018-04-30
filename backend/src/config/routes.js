const express = require('express')

module.exports = function(server){
    
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    // USER Routes
    const service = require('../api/user/userServices')
    service.register(router,'/user')
}