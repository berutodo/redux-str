const COMPLETAR_AULA = "aulas/COMPLETAR_AULA";
const COMPLETAR_CURSO = "aulas/COMPLETAR_CURSO";
const RESETAR_CURSO = "aulas/RESETAR_CURSO";

const initialState = [{
        id: 1,
        nome: 'Design',
        completa: true,
    },
    {
        id: 2,
        nome: 'HTML',
        completa: false,
    },
    {
        id: 3,
        nome: 'CSS',
        completa: false,
    },
    {
        id: 4,
        nome: 'JavaScript',
        completa: false,
    },
];

export const completarAula = (aula) => ({ type: COMPLETAR_AULA, payload: aula })
export const completarCurso = () => ({ type: COMPLETAR_CURSO })
export const resetarCurso = () => ({ type: RESETAR_CURSO })

const reducer = immer.produce((state, action) => {
    switch (action.type) {
        case COMPLETAR_AULA:
            state[action.payload - 1].completa = true;
            break;
        case COMPLETAR_CURSO:
            state.map(e => e.completa = true)
            break;
        case RESETAR_CURSO:
            state.map(e => e.completa = false)
            break;
        default:
            state
    }
}, initialState);

export default reducer;