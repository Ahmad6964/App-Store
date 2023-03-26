const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const bodyParser = require('body-parser')
const cors = require('cors');


const app = express();
app.use(cors());
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apple_store'
});

connection.connect();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Post images Api
app.post('/uploads', upload.single('file'), (req, res) => {
    const image_url = req.file.path;
    const sql = `INSERT INTO images (image_url) VALUES ('${image_url}')`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send('image uploaded successfully!');
    });
});

// Get Images Api

app.get('/get/images', (req, res) => {
  const sql = `SELECT * FROM images`;
  connection.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
  });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});