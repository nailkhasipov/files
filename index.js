const express = require('express')
const multer  = require('multer')

const app = express()
const port = 3001

var upload = multer({ dest: './uploads/' })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/upload', upload.single('file'), function (req, res) {
    const fileId = req.file.filename
    res.send(fileId)
 });

app.listen(port, () => {
  console.log(`File app listening at http://localhost:${port}`)
})