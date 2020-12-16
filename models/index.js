const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI + '/bountyHunters', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


module.exports = {
    Bounty: require('./Bounty')
}