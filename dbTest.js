require('dotenv').config()

const models = require('./models')

models.Bounty.create({
    name: 'Yosemite Sam',
    wantedFor: 'Rootin & tootin',
    client: 'Walt Disney',
    ship: 'good ship lollipop',
    reward: 1000,
    hunters: [{
        name: 'Bugs Bunny',
        origin: 'Earth'
    }],
    captured: false,
    lastSeen: '1982'
})

// models.Bounty.deleteMany().then(() => {
//     console.log('done!');
// })