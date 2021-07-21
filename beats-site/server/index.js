const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(5000, () => {
    console.log("running on 5000");
});