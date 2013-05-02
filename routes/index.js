var brand = 'IS683 CSV Data Visualization';
var energyData = require('../controllers/energyUse');

exports.index = function(req, res){
  res.redirect('/home');
}

exports.home = function(req, res){
  res.render('home', { title: 'Home', id: 'home', brand: brand, energyData: energyData })
};