import sql from '../config/configuracion.js';

async function registrar(nombre, cedula, diagnostico) {
    const respuesta = await sql`INSERT INTO usuarios (nombre, cedula, diagnostico)
     VALUES (${nombre}, ${cedula}, ${diagnostico})`;
     return respuesta;
}

async function listar(cedula) {
    const respuesta = await sql`SELECT * FROM usuarios WHERE cedula = ${cedula}`;
    return respuesta;
}

export {registrar, listar};