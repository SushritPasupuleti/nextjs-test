const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello there')
})

app.get('/data', (req, res) => {
    console.log("Data Request")
    res.json(
        [
            {"title": "wow", "body": "wow body"},
            {"title": "wow1", "body": "wow body1"},
            {"title": "wow2", "body": "wow body2"},
            {"title": "wow3", "body": "wow body3"},
        ])
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})