import update from "react-addons-update";
import constants from './actionConstants';

const {
    SAVE_MESSAGES_TO_REDUX,
    REQUIRED_CHATROOM_MESSAGES,
    SET_MESSAGES_TO_EMPTY
} = constants;



//ACTIONS
export function setRequiredMessagesToEmptyArray(payload){
    return((dispatch)=>{
        dispatch({
            type: SET_MESSAGES_TO_EMPTY,
            payload
        })
    })
}










//ACTION HANDLERS







function handlegetRequiredMessages(state, action){
    return update(
        state, {
            requiredMessages: {
                $set: action.payload
            }
        }
    )
}


function handleSetRequiredMessagesToEmptyArray(state, action){
    return update(
        state, {
            requiredMessages: {
                $set: action.payload
            }
        }
    )
}















const ACTION_HANDLERS = {
 REQUIRED_CHATROOM_MESSAGES: handlegetRequiredMessages,
 SET_MESSAGES_TO_EMPTY: handleSetRequiredMessagesToEmptyArray
}

const initialState = {
   requiredMessages: []
};

export function chatroomReducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;

}