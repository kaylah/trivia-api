var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var sampleTrivia = require('./app/trivia-fixture.js');
var trivia = require('./app/trivia.js');

//var mongoose   = require('mongoose');
//mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router(); 

router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/sample')

  .get(function(req, res) {
    res.json(sampleTrivia);
/*    triviaQA = trivia.getQuiz();
    console.log('triviaQA', triviaQA);
    triviaQA.then(function(result){res.json(result);});*/
  });

router.route('/category/:category')

  .get(function(req, res) {
    //res.json(sampleTrivia);
    trivia.getQuiz(req.params)
      .then(function(result){res.json(result);});
  });

router.route('/category/:category/difficulty/:difficulty')

  .get(function(req, res) {
    //res.json(sampleTrivia);
    trivia.getQuiz(req.params)
      .then(function(result){res.json(result);});
  });

router.route('/category/:category/difficulty/:difficulty/count/:count')

  .get(function(req, res) {
    //res.json(sampleTrivia);
    trivia.getQuiz(req.params)
      .then(function(result){res.json(result);});
  });

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
