var mongoose = require("mongoose");

var brand = 'IS683 CSV Data Visualization';


mongoose.connect('mongodb://localhost/FinalProject', function (err,rsp) {
	if(!err) {
		console.log("Successfully connected to the Database");
	}
	else {
		console.log("Error while connecting to the Database");
	}
});

/* proposed struct by prof

{ country: "Afghanistan", 
  energyUse: { [{"1960": "1231"}],
  			   [{"1960": "1231"}] }
*/

var energySchema = new mongoose.Schema({
	country: String
});

var countriesSchema = new mongoose.Schema({
	name: String
})


var energyModel = mongoose.model('energyUse', energySchema);
var countriesModel = mongoose.model('countries',countriesSchema);
var qEnergy = energyModel.find();
var qCountries = countriesModel.find();

qCountries.select('country');

var qData = qCountries.exec(function (err, result) {
	//return result;
	//console.log(JSON.stringify(result));
	console.log(result);
});
//console.log(qData);

//exports.oCountries = qData;
/*
energyModel.find().exec(function(err, result) {
	console.log(result);
});
*/
exports.index = function(req, res){
  res.redirect('/home');
}

exports.home = function(req, res){
  res.render('home', { title: 'Home', id: 'home', brand: brand })
};

exports.about = function(req, res){
  res.render('about', { title: 'About', id: 'about', brand: brand })
};
