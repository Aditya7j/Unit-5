import { ADD_TODO } from "./action"


const init_store ={todo:[]}

export const reducer = (store=init_store,{type,payload})=>{

    if(type===ADD_TODO){
        return {...store,todo:payload}
    }
    else{
        return store
    }

}

