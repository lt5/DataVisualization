
/*
 * GET home page.
 */

var brand = 'IS683 CSV Data Visualization';

exports.index = function(req, res){
  res.redirect('/home');
}

exports.home = function(req, res){
  res.render('home', { title: 'Home', id: 'home', brand: brand })
};
/*
exports.about = function(req, res){
  res.render('about', { title: 'About', id: 'about', brand: brand })
};
*/