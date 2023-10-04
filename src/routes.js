const express = require('express')
const router = express.Router()

const userController = require('./controllers/userController')

router.post('/users/signup', userController.registrar)
router.get('/admin/users', userController.buscarTodos)
router.put('/users/:id', userController.alterar)
router.post('/users/login', userController.login)
router.post('/admin/login', userController.loginAdmin)
router.get('/admin/reports', userController.contarUsuarios)
router.delete('/users/:id', userController.softDelete)


module.exports = router