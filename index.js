
var express 	= require('express');
var app 	  	= express();
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });
var fortune	= require('./lib/fortune.js');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');




app.set('PORT', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home');
});

app.get('/About', function(req, res){
	var randomFortune = fortune.getFortune();
	res.render('about', {fortune: randomFortune});
});

app.use(function(req, res){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('PORT'), function(){
	console.log('Express is now listening on http://localhost:' + app.get('PORT') + 
	'; Press Ctrl-C to terminate!');
});


