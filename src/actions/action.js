import { ADD_USER } from "../actiontypes/actionTypes"

export const addUser=(user)=>(dispatch)=>{
dispatch(
    { 
    type:ADD_USER,
    payload:user
})
}