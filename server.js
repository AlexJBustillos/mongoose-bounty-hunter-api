const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const models = require('./models')

app.get('/', (req, res) => {
    res.send('Hello from root')
})

app.use('/bounties', require('./controllers/bountiesController'))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})