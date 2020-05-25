import update from "react-addons-update";
import constants from './actionConstants';
import axios from 'axios'
const {GET_TASKS_FROM_FIRE_BASE} = constants;
//ACTIONS
export function getTasksFromFireBase(id){
    return(dispatch)=>{
       

        axios.put("/user/tasks",{
            userId: id
        }).then((res)=>{
            
        dispatch({
            type:GET_TASKS_FROM_FIRE_BASE,
            payload: res.data
        })

        console.log("DATA FETCHED SUCCESSFULLY")
            
        }).then(()=>{
            
        })
        .catch((error)=>{
            console.log(error)
            
        })

    }
}






















//ACTION HANDLERS
function handleGetTasksFromFireBase(state, action){
    return update(state, {
        tasks: {
            $set: action.payload
        }
    })
}

const ACTION_HANDLERS = {
    GET_TASKS_FROM_FIRE_BASE: handleGetTasksFromFireBase
}

const initialState = {
tasks: []
};

export function alarmReducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;

}