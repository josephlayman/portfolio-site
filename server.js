
var 
    express             = require('express');
    app                 = express(),

    routes              = require('./routes').routes,
    
    expressLayouts      = require('express-ejs-layouts'),
    stylus              = require('stylus')
;

app.configure(function () {

    app.use(express.limit('10mb'));
    app.use(express.favicon('public/images/favicon.png')); 
    
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.set('layout', 'layout'); //default layout
    app.use(expressLayouts);
    
    app.use(stylus.middleware({
        src: __dirname + '/public',
        dest: __dirname + '/public'
    }));
    
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));

});

routes.load(app);

app.listen(process.env.PORT || 3000);
