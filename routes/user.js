const {
    Router
} = require('express');

const {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
} = require('../controllers/user');

const router = Router();

// Get
router.get('/', usuariosGet);

// Update
router.put('/:id', usuariosPut);
// Create // Ruta: /api/users/hello
router.post('/hello', usuariosPost);
// Delete
router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);


module.exports = router;