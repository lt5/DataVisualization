/**
 * Module dependencies.
 */

var express = require('express')
  , mongoose = require('mongoose')
  , http = require('http')
  , path = require('path') ;

var app = express();

//db connection
mongoose.connect('mongodb://localhost/FinalProject', function (err,rsp) {
  if(!err) {
    console.log("Successfully connected to the Database");
  }
  else {
    console.log("Error while connecting to the Database");
  }
});


// Configuration

app.configure(function(){
  app.set('port', process.env.PORT || 3002);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

require('./models/energyUse');
routes = require('./routes');
app.get('/api', function (req,res) {
  var obj = 
    [{country: 'test', id:'1231'},
     {country: 'country2', id:'1231'}]
  res.send(obj);
});


app.get('/', routes.index);
app.get('/home', routes.home);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
  //console.log(routes.home);
});