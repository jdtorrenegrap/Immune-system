import { registrar, listar } from '../models/consultas.js';
import { resultadosdiagnostico } from './reglas.js';

export const registrarUsuario = async (req, res) => {
    const { nombre, cedula, pregunta_1, pregunta_2, pregunta_3, pregunta_4, pregunta_5 } = req.body;

    const datos = {
        pregunta_1,
        pregunta_2,
        pregunta_3,
        pregunta_4,
        pregunta_5
    };

    try {
        const resultado = await resultadosdiagnostico(datos);
        const diagnostico = resultado.events.map((event) => event.params.mensaje).join(' ');

        await registrar(nombre, cedula, diagnostico);
        res.status(200).json({
            mensaje: 'Usuario registrado correctamente',
            body: {
                nombre,
                cedula,
                diagnostico
            }
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar usuario', error });
    }
};

export const listarUsuarios = async (req, res) => {
    const { cedula } = req.params;
    try {
        const respuesta = await listar(cedula);
        res.status(200).json(respuesta);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al listar usuarios', error });
    }
};