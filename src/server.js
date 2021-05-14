const express = require('express')
const server = express();
const routes = require('./routes')
//habilitar arquivos estaticos

server.use(express.static('public'));
server.use(routes);

//usando template engine
server.set('view engine', 'ejs')

server.get('/',(request, response)=>{
    return response.render(__dirname+"/views/index")
})

server.listen(3000, () => console.log("rodando..."));
