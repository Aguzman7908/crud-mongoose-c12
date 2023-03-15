/* Importing the express module and creating an instance of it. */
const {Router} =requier('expres');
const router = express.Router();

const {
     getAlumnos,createAlumnos, updateAlumnos, deleteAlumnos } = require('../controllers/alumnos.controllers')


router.get('/obtener', getAlumnos)

router.post('/crear', createAlumnos)

router.put('/actualizar', updateAlumnos)

router.delete('/borrar', deleteAlumnos)

module.exports = router
