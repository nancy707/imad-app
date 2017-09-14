var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles= {
   'article1':{
        title:'ArticleOne',
    heading:'my First article',
    content:`<p>qhwfukqefhbu</p>
    <p>ef2f2f2g21</p>
    <p>g2g2g42</p>`
   },
   'article2':{
       title:'ArticleTwe',
    heading:'my Second article',
    content:`<p>qhwfukqefhbu</p>
    <p>ef2f2f2g21</p>
    <p>g2g2g42</p>`
   },
   'article3':{
       title:'ArticleThree',
    heading:'my Third article',
    content:`<p>qhwfukqefhbu</p>
    <p>ef2f2f2g21</p>
    <p>g2g2g42</p>`
   }
};
  

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var template=
    `<html>
    <head>
        <title>${title}</title>
        <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
    <div class='container'>
        <div>
            <a href='/'>HOME</a>
        </div>    
        <div>
            <h1>${heading}</h1>
        </div>
        <div>
            17 9 2017
            ${content}
        </div>
    </div>
    </body>
</html>`;
return template;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter+=1;
    res.send(counter.toString());
});

app.get('/:articleName',function(req, res) {
    var atricleName=req.params.atricleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
