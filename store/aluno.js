const INCREMENTAR_TEMPO = 'aluno/INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'aluno/REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL';

const initialState = {
    nome: 'André Rafael',
    email: 'andre@origamid.com',
    diasRestantes: 120,
};

export const modificarEmail = (email) => ({ type: MODIFICAR_EMAIL, payload: email })

const reducer = immer.produce((state, action) => {
    switch (action.type) {
        case INCREMENTAR_TEMPO:
            state.diasRestantes + 1;
            break;
        case REDUZIR_TEMPO:
            state.diasRestantes - 1;
            break;
        case MODIFICAR_EMAIL:
            state.email = action.payload
    }
}, initialState);

export default reducer;