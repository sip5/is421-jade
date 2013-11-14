module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/createqalc', function(req, res) {
        res.render('createqalc');
    });

    app.get('/myqalcs', function(req, res) {
        res.render('myqalcs')
    });

    app.get('/offers', function(req, res) {
        res.render('offers');
    });

};