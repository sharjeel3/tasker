/**
 * Created by sharjeel on 11/12/17.
 */
var keystone = require('keystone');


exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    // Set locals
    locals.section = 'tasker';

    view.render('tasker');

}
