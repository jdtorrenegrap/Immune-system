import express from 'express';
import { registrarUsuario, listarUsuarios } from '../controller/resultados.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Sistema de Reglas = Inmunológico');
})

router.post('/registrar', registrarUsuario);
router.get('/listar/:cedula', listarUsuarios);

export default router;