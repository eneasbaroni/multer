import {Router} from 'express'
import upload from '../middlewares/multer.js'

const multerController = Router()

multerController.get('/', (req, res) => {
    res.render('multer')
})

multerController.post('/', upload.single('myFile'), (req, res) => {
    const file = req.file
    if (!file) res.status(500).send('Error al subir imagen')
    res.status(200).send('Imagen Cargada con Exito')
})

multerController.post('/multiple', upload.array('myFiles'), (req, res) => {
    const files = req.files
    if (!files) res.status(500).send('Error al subir')
    res.status(200).send('Imagenes Cargadas con exito')
})


export default multerController