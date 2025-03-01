import { Engine } from "json-rules-engine";

const rules = [
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: true },
                { fact: 'pregunta_4', operator: 'equal', value: true },
                { fact: 'pregunta_5', operator: 'equal', value: true }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Sistema inmunológico sano' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: true },
                { fact: 'pregunta_4', operator: 'equal', value: true },
                { fact: 'pregunta_5', operator: 'equal', value: false }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Posible infección leve' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: true },
                { fact: 'pregunta_4', operator: 'equal', value: false },
                { fact: 'pregunta_5', operator: 'equal', value: true }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Reacción alérgica ocasional' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: true },
                { fact: 'pregunta_4', operator: 'equal', value: false },
                { fact: 'pregunta_5', operator: 'equal', value: false }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Alergia con síntomas recurrentes' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: false },
                { fact: 'pregunta_4', operator: 'equal', value: true },
                { fact: 'pregunta_5', operator: 'equal', value: true }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Antecedentes familiares sin síntomas actuales' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: false },
                { fact: 'pregunta_4', operator: 'equal', value: true },
                { fact: 'pregunta_5', operator: 'equal', value: false }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Riesgo moderado de enfermedad autoinmune' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: false },
                { fact: 'pregunta_4', operator: 'equal', value: false },
                { fact: 'pregunta_5', operator: 'equal', value: true }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Alergias y antecedentes familiares' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: false },
                { fact: 'pregunta_4', operator: 'equal', value: false },
                { fact: 'pregunta_5', operator: 'equal', value: false }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Alto riesgo de enfermedad autoinmune' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: false },
                { fact: 'pregunta_3', operator: 'equal', value: true },
                { fact: 'pregunta_4', operator: 'equal', value: true },
                { fact: 'pregunta_5', operator: 'equal', value: true }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Fatiga sin signos de inmunodeficiencia' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: false },
                { fact: 'pregunta_3', operator: 'equal', value: true },
                { fact: 'pregunta_4', operator: 'equal', value: true },
                { fact: 'pregunta_5', operator: 'equal', value: false }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Fatiga con posible infección leve' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: false },
                { fact: 'pregunta_3', operator: 'equal', value: true },
                { fact: 'pregunta_4', operator: 'equal', value: false },
                { fact: 'pregunta_5', operator: 'equal', value: true }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Fatiga con alergias ocasionales' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: false },
                { fact: 'pregunta_3', operator: 'equal', value: true },
                { fact: 'pregunta_4', operator: 'equal', value: false },
                { fact: 'pregunta_5', operator: 'equal', value: false }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Fatiga con alergias y fiebre recurrente' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: false },
                { fact: 'pregunta_3', operator: 'equal', value: false },
                { fact: 'pregunta_4', operator: 'equal', value: true },
                { fact: 'pregunta_5', operator: 'equal', value: true }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Fatiga con antecedentes familiares' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: false },
                { fact: 'pregunta_3', operator: 'equal', value: false },
                { fact: 'pregunta_4', operator: 'equal', value: true },
                { fact: 'pregunta_5', operator: 'equal', value: false }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Fatiga con antecedentes y riesgo autoinmune' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: false },
                { fact: 'pregunta_3', operator: 'equal', value: false },
                { fact: 'pregunta_4', operator: 'equal', value: false },
                { fact: 'pregunta_5', operator: 'equal', value: true }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Fatiga, alergias y riesgo autoinmune' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: true },
                { fact: 'pregunta_2', operator: 'equal', value: false },
                { fact: 'pregunta_3', operator: 'equal', value: false },
                { fact: 'pregunta_4', operator: 'equal', value: false },
                { fact: 'pregunta_5', operator: 'equal', value: false }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Posible enfermedad autoinmune en desarrollo' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: false },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: true },
                { fact: 'pregunta_4', operator: 'equal', value: true },
                { fact: 'pregunta_5', operator: 'equal', value: true }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Sistema inmunológico débil por infecciones' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: false },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: true },
                { fact: 'pregunta_4', operator: 'equal', value: true },
                { fact: 'pregunta_5', operator: 'equal', value: false }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Inmunodeficiencia leve' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: false },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: true },
                { fact: 'pregunta_4', operator: 'equal', value: false },
                { fact: 'pregunta_5', operator: 'equal', value: true }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Inmunodeficiencia con alergias' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: false },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: true },
                { fact: 'pregunta_4', operator: 'equal', value: false },
                { fact: 'pregunta_5', operator: 'equal', value: false }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Riesgo de inmunodeficiencia con alergias y fiebre' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: false },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: false },
                { fact: 'pregunta_4', operator: 'equal', value: true },
                { fact: 'pregunta_5', operator: 'equal', value: true }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Inmunodeficiencia con antecedentes familiares' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: false },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: false },
                { fact: 'pregunta_4', operator: 'equal', value: true },
                { fact: 'pregunta_5', operator: 'equal', value: false }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Riesgo alto de enfermedad autoinmune' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: false },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: false },
                { fact: 'pregunta_4', operator: 'equal', value: false },
                { fact: 'pregunta_5', operator: 'equal', value: true }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Enfermedad autoinmune en fase temprana' } }
    },
    {
        conditions: {
            all: [
                { fact: 'pregunta_1', operator: 'equal', value: false },
                { fact: 'pregunta_2', operator: 'equal', value: true },
                { fact: 'pregunta_3', operator: 'equal', value: false },
                { fact: 'pregunta_4', operator: 'equal', value: false },
                { fact: 'pregunta_5', operator: 'equal', value: false }
            ]
        },
        event: { type: 'diagnostico', params: { mensaje: 'Probable enfermedad autoinmune en curso' } }
    }
];

const engine = new Engine(rules);
export const resultadosdiagnostico = async (datos) => {  
    return await engine.run(datos);
}