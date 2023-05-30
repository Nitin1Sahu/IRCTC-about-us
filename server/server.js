const express = require('express')
const app = express();
const port = 8000;
const cors = require('cors')
const data = require('./data/data')

app.use(cors())
app.get('/api/management', (req, res) => {
    res.send(data)
})

app.listen(8000, () => {
    console.log(`listing to port 8000`)
})