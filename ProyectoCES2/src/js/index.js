const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
//inicializaciones
const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
defaultLayout:'main',
layoutsDir: path.join(app.get('views', 'layouts')),
partialsDir: path.join(app.get('views', 'partials')),
extname: '.hbs'
}));
app.set('view engine', '.hbs');

//MIDDLEWARES: funciones antes de que lleguen al servidor o antes de que lleguen a las rutas
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));



//variables globales


//rutas

//archivos estaticos


//el servidor esta escuchando
app.listen(app.get('port'), ()=>{

    console.log('Server escuchado', app.get('port'));
});