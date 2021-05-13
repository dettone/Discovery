const express = require('express')
const server = express();
const routes = require('./routes')
//habilitar arquivos estaticos

server.use(express.static('public'));
server.use(routes)

server.get('/',(request, response)=>{
    return response.sendFile(__dirname+"/views/index.html")
})

server.listen(3000, () => console.log("rodando..."));
