import express from 'express';
import handlebars from "express-handlebars";
import router from './router/index.js'

const app = express()


//middlewares para recibir json y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//carpeta de estaticos
app.use(express.static(process.cwd() + '/public'))

//motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', process.cwd() + '/src/views')
app.set('view engine', 'handlebars')

app.use("/", router);

//levantar el servidor
app.listen(8080, () => {
    console.log('servidor levantado en el puerto 8080')
})
