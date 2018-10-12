var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var Post = require('./models/post');

// const arr = ['rrrr', 'tttt', 'yyyyy'];

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    Post.find({}).then(post =>res.render('index', {post: post}))
});

//res.render('index', {arr: arr});
app.get('/create', function (req, res) {res.render('create');});
app.post('/create', function (req, res) {
    var{title,body} = req.body;

    Post.create({
        title: title,
        body: body
    });
    res.redirect('/');
});

module.exports = app;