import update from "react-addons-update";
import constants from './actionConstants';
import axios from 'axios'
import { ProductConsumer } from "../../../context";
import { AppLoading } from "expo";

const {GET_ALL_USERS, GET_CHATS_IDS, LOADING} = constants;



//ACTIONS


export function getAllUsers(){
    return(dispatch)=>{
        dispatch({
            type:LOADING,
            payload: true
        })
        
        axios.get("https://us-central1-closefriend-1333a.cloudfunctions.net/api/users").then((response)=>{
           
            dispatch({
                type:GET_ALL_USERS,
                payload: response.data.users
            })

        }).then(()=>{
            dispatch({
                type: LOADING,
                payload: false

            })
        })
        .catch((error)=>{
            console.log(error)
            dispatch({
                type: LOADING,
                payload: false

            })
        })
    }
}

export function getChatRoomIds(){
    return(dispatch)=>{
        dispatch({
            type:LOADING,
            payload: true
        })

        axios.get("https://us-central1-closefriend-1333a.cloudfunctions.net/chats").then((res)=>{
            
        dispatch({
            type:GET_CHATS_IDS,
            payload: res.data.ids
        })

            
        }).then(()=>{
            dispatch({
                type: LOADING,
                payload: false

            })
        })
        .catch((res)=>{
            console.log(error)
            dispatch({
                type: LOADING,
                payload: false

            })
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




function handlegetChatRoomIds(state, action){
       
    return update(state, {
        chatroomIDs: {
            $set:  action.payload
        }  
    })

    


}

function handleLoading(state, action){
       
    return update(state, {
        loading: {
            $set:  action.payload
        }  
    })


}











const ACTION_HANDLERS = {
    GET_ALL_USERS: handlegetAllUsers,
    GET_CHATS_IDS: handlegetChatRoomIds,
    LOADING: handleLoading
}

const initialState = {
    users: [],
    chatroomIDs: [],
    loading: false
};

export function chatsReducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;

}