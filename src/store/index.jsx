import Reducer from './action/rank'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware,combineReducers} from 'redux'

// let reducer = combineReducers({
//     Reducer
// })

const store = createStore(Reducer,applyMiddleware(thunk))

export default store 