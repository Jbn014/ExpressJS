const express = require('express')
const path = require('path')
let app = express() ;

app.use((req, res, next) => {
    console.log(req.ip)

    next();
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);
//app.use(express.static(path.join(__dirname, '../public')))