import contador from './contador'
import aluno from './aluno'
import aulas from './aulas'

const reducer = Redux.combineReducers({ contador, aluno, aulas })

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;