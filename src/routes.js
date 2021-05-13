
const express = require('express')
const routes = express();

const basePath = __dirname+'/views/';

routes.get('/index',(req, res) => res.render(basePath+"index"))
routes.get('/job',(req, res) => res.render(basePath+"job"))
routes.get('/job-edit',(req, res) => res.render(basePath+"job-edit"))


module.exports = routes;
