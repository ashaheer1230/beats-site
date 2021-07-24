const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'beatsDB',
})


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    const getBeats = "SELECT * FROM beatsLinks";
    db.query(getBeats, (err, result) => {
        res.send(result);
    })
})

//This is used to manually uplaod music link and info to DB
/*app.post('/api/upload', (req, res) => {

    const Name = req.body.Name;
    const Tempo = req.body.Tempo;
    const Key = req.body.Key;
    const Scale = req.body.Scale;
    const musicFile = req.body.tempFile;

    const sqlUpload = "INSERT INTO beatsLinks VALUES (?, ?, ?, ?, ?);";
    db.query(sqlUpload, [Name, Tempo, Key, Scale, musicFile], (err, result) => {
    })
})*/


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});