const express = require('express')
const multer  = require('multer')
const dayjs = require('dayjs')

const app = express()
const port = 3001

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, 'uploads/');
  },
  filename: function (req, file, callback) {
    const ext = file.mimetype.split('/')[1];
    const date = dayjs(new Date).format('YYYY-MM-DD HH-mm-ss') 
    callback(null, `${date}.${ext}`);
  }
});

const upload = multer({storage: storage})

app.use(express.static('uploads'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/upload', upload.single('file'), function (req, res) {
    res.send(req.file.filename)
 });

app.listen(port, () => {
  console.log(`File app listening at http://localhost:${port}`)
})