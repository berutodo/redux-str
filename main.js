import store from "./store/configureStore.js";
import { incrementar } from "./store/contador.js";
import { modificarEmail } from './store/aluno.js';
import { completarAula, completarCurso, resetarCurso } from './store/aulas.js'

let name = document.getElementById('nome')
let email = document.getElementById("email")
let tempoRestante = document.getElementById("tempoRestante")
let aulasCompletas = document.getElementById("aulasCompletas")

console.log(name)

store.subscribe(() => {
    console.log("chegamos aqui")
    const state = store.getState()
    name.innerText = state.aluno.nome
    email.innerText = state.aluno.email
    tempoRestante.innerText = state.aluno.diasRestantes
    aulasCompletas.innerText = state.aulas.filter(item => item.completa == true).length;



});
store.dispatch(incrementar());
store.dispatch(modificarEmail('gabriel1234@gmail.com'))
store.dispatch(completarAula(3))
store.dispatch(completarCurso())
store.dispatch(resetarCurso())