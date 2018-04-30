const Invetory = require('./user')

Invetory.methods(['get', 'post', 'put', 'delete'])
Invetory.updateOptions({new: true, runValidators: true})

module.exports = Invetory