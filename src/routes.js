
const express = require('express')
const routes = express();

const basePath = __dirname+'/views/';

const profile =  {
    name: 'João Vitor',
    avatar:'https://avatars.githubusercontent.com/u/32111175?s=400&v=4',
    'monthly-budget': 3000,
    'days-per-week': 5,
    'hours-per-day':5,
    'vacation-per-year':4
}

routes.get('/index',(req, res) => res.render(basePath+"index"))
routes.get('/job',(req, res) => res.render(basePath+"job"))
routes.get('/job-edit',(req, res) => res.render(basePath+"job-edit"))
routes.get('/profile',(req,res) => res.render(basePath+"/profile",{profile}))

module.exports = routes;
