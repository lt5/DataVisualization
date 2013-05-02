//get energy use data

var mongoose = require('mongoose');
  //, energyUse = mongoose.model('energyUse');

var energySchema = new mongoose.Schema({}, {collection:'energyUse'});
var energyModel = mongoose.model('energyUse', energySchema);

var qEnergy = energyModel.find({});

var qData = qEnergy.exec(function (err, result) {
	//console.log(result);
	return result;
});

 exports.getEnergyUse = function (req, res){
 	res.render('energyUse', {energyUse: qData});
 	console.log(res);
 };
 


 exports.getEnergyUse = qData;