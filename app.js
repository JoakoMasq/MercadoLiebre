let express = require('express');
let path = require('path')

let app =  express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) =>{
    res.sendFile((__dirname + '/view/Home.html'));
});

app.get('/Register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './view/Register.html'));
});

app.get('/Login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './view/Login.html'));
});

app.listen(3030, function () {
    console.log('Servidor corriendo');
});