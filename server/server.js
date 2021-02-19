const express = require('express')
const app = express()
const port = 5000

posts = 
[
    {"title": "wow", "body": "wow body"},
    {"title": "wow1", "body": "wow body1"},
    {"title": "wow2", "body": "wow body2"},
    {"title": "wow3", "body": "wow body3"},
]

app.get('/', (req, res) => {
  res.send('Hello there')
})

app.get('/data', (req, res) => {
    console.log("Data Request")
    res.json(posts)
})

app.get('/data/:id', (req, res) => {
    console.log(`Specfic Data Request, ${req.params.id}`)
    
    for (post in posts){
        console.log(posts[post]['title'])
        if (posts[post]['title'] === req.params.id) 
        {
            res.json(posts[post])
        }
    }
    return res.json({"success": "false"})
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})