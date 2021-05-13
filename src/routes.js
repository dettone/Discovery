
const express = require('express')
const routes = express();

const basePath = __dirname+'/views';

routes.get('/index',(request, response) => response.sendFile(basePath+"/index.html"))
routes.get('/job',(request, response) => response.sendFile(basePath+"/job.html"))
routes.get('/job-edit',(request, response) => response.sendFile(basePath+"/job-edit.html"))

module.exports = routes;
