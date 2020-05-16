import update from "react-addons-update";
import constants from './actionConstants';

const {
    GET_USER_COMPOSED_DATA
} = constants;


//Actions

export function getUserComposedData(payload){
    return(
        {
            type: GET_USER_COMPOSED_DATA,
            payload
            }
    )
}



















//ActionHandlers

function handlegetUserComposedData(state, action){
    return update(state, {
        composedData: {
            $set: [...state.composedData, action.payload]
        }  
    })
}


























const ACTION_HANDLERS = {
    GET_USER_COMPOSED_DATA: handlegetUserComposedData

}

const initialState = {
 composedData: []
};

export function composeReducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;

}