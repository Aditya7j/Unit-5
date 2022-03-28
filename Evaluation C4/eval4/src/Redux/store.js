import { loginReducer } from "./Login/loginReducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    login:loginReducer,
    
})

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // add your reducers here