import { useState } from "react"

import { GroceryInput} from "./GroceryInput"

import {GroceryList} from "./GroceryList"

export const Groceries=()=>{
    const [lists,setLists] =useState([])
    

    const addItems = (data)=>{

        setLists([...lists,data])
        // console.log(lists)
    }
    return(
        <div>
            <GroceryInput  addItems={addItems}/>
        {lists.map((e)=>{

          return <GroceryList  item ={e}/>
            // console.log(e)
        })}
        </div>
    )
}