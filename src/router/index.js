import { Router } from 'express'
import multerController from '../controllers/multer.controller.js'

const router = Router()

router.get('/', async (req, res) => {
    res.send('hola mundo')
})

router.use('/multer', multerController)

export default router