import { LOGIN } from "./action";
const initialState = { user: null };

export const loginReducer = (store = initialState, { type, payload }) => {
    // switch (type) {
    //     // add your login reducer functionalities here

    // }
    if(type===LOGIN){
        return {...store,login:[...store.login,payload]}
    }
    else{
        return store
    }
    
}