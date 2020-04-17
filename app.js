const express = require('express');
const hbs = require('express-handlebars');
require('dotenv/config');
//! Initializations
const app = express();
//! Config view engine
app.engine('.hbs', hbs({
     defaultLayout: 'main',    //!Cual va aser el .hbs que va a contener todas las partes que se vana arepetir como la navegacion, el footer en las diferentes vistas
     layoutsDir: './views/layouts', //! Dentro de la carpeta layouts esta el main.hbs
     partialsDir: './views/partials', //! Estos son mis parciales que puedo reutilizar en cualquier momento
     extname: '.hbs' //! que extension van a tener todos mis archivos
}));
//! Settings
//! Use view engine
app.set('view engine', '.hbs');
app.set('port', process.env.PORT || 3000);

//!Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(require('./routes/photos'));
//! Database Connection
require('./database');

//! Start Server
app.listen(app.get('port'), ()=>{
     console.log(`Server on port ${app.get('port')}`)
})
