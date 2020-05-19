import update from "react-addons-update";
import constants from './actionConstants';
import axios from 'axios'
import { ProductConsumer } from "../../../context";

const {GET_ALL_USERS} = constants;



//ACTIONS


export function getAllUsers(){
    return(dispatch)=>{
        
        axios.get("https://us-central1-closefriend-1333a.cloudfunctions.net/api/users").then((response)=>{
           
            dispatch({
                type:GET_ALL_USERS,
                payload: response.data.users
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
}



















//ACTION HANDLERS

function handlegetAllUsers(state, action){
       
        return update(state, {
            users: {
                $set:  action.payload
            }  
        })


}















const ACTION_HANDLERS = {
    GET_ALL_USERS: handlegetAllUsers
}

const initialState = {
    users: []
};

export function chatsReducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;

}