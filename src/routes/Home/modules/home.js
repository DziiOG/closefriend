import update from "react-addons-update";
import constants from './actionConstants';
import axios from 'axios'

const {GET_USER_NAME, SIGN_USER_OUT} = constants;

export function getUserName(id){
    axios
    .post('https://us-central1-closefriend-1333a.cloudfunctions.net/api/user', {
        userId: id
    })
    .then(results => {
        dispatch({
            type:GET_USER_NAME,
            payload: results.data
        })
        
    
    })
    .catch(err => {
    console.log(err);
    });
}





function handleGetUserName(state, action){
    return update(state, {
        username: {
            $set: action.payload
        }
    })
}


const ACTION_HANDLERS = {
    GET_USER_NAME: handleGetUserName
}

const initialState = {
 username: {}
};

export function homeReducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;

}