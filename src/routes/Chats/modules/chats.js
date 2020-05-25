import update from "react-addons-update";
import constants from './actionConstants';
import axios from 'axios'
import { ProductConsumer } from "../../../context";
import { AppLoading } from "expo";

const {GET_ALL_USERS, GET_CHATS_IDS, LOADING, SAVE_MESSAGES_TO_REDUX, REQUIRED_CHATROOM_MESSAGES, GET_ALL_CHAT_MESSAGES_FROM_FIRE} = constants;



//ACTIONS
export function getAllChatMessagesFromFirebase(){
    
    return((dispatch)=>{
        dispatch({
            type:LOADING,
            payload: true
        })
        axios.get("/allchats").then(response=>{
            dispatch({
                type: GET_ALL_CHAT_MESSAGES_FROM_FIRE,
                payload: response.data.messages
            })
        }).then(()=>{
            dispatch({
                type:LOADING,
                payload: false
            })
        }).catch(error=>{
            dispatch({
                type:LOADING,
                payload: false
            })
            console.log(error)
        })
    })
}


export function getAllUsers(){
    return(dispatch)=>{
        dispatch({
            type:LOADING,
            payload: true
        })
        
        axios.get("/users").then((response)=>{
           
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

        axios.get("/chats").then((res)=>{
            
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




export function getChatMessages(payload){
    
    return(
        {
            type: SAVE_MESSAGES_TO_REDUX,
            payload
            }
    )
}



export function getRequiredChatRoomMessages(messages = [], id){
    return((dispatch)=>{
        let results = [];
        messages.forEach(element => {
            if(element.userId == id){
                if(element.messages.length !== 0){

                  
                    results.push(element.messages)
                }

                
            }
        });

        if(results[0] !== undefined){

            dispatch({
                type: REQUIRED_CHATROOM_MESSAGES,
                payload: results[0],
            })
            console.log(results[0])
        }else{
            dispatch({
                type: REQUIRED_CHATROOM_MESSAGES,
                payload: results,
            })
          //  console.log(results)
        }
    })
    
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

function handleGetRequiredChatRoomMessage(state, action){
    return update(state, {
        requiredMessages: {
            $set: action.payload
        }
    })
}








function handlegetMessages(state, action){

    return update(state, {
        
        messages: {
            $set:  [...state.messages, action.payload]
        }
    })
}

function handleGetAllChatMessagesFromFire(state, action){
    return update(state, {
        allMessages: {
            $set: action.payload
        }
    })
}


const ACTION_HANDLERS = {
    GET_ALL_USERS: handlegetAllUsers,
    GET_CHATS_IDS: handlegetChatRoomIds,
    LOADING: handleLoading,
    SAVE_MESSAGES_TO_REDUX: handlegetMessages,
    REQUIRED_CHATROOM_MESSAGES: handleGetRequiredChatRoomMessage,
    GET_ALL_CHAT_MESSAGES_FROM_FIRE: handleGetAllChatMessagesFromFire
}

const initialState = {
    users: [],
    chatroomIDs: [],
    loading: false,
    messages: [],
    requiredMessages: [],
    allMessages: []
};

export function chatsReducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;

}