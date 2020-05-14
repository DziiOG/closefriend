import { combineReducers } from 'redux';

import { homeReducer as home } from "../routes/Home/modules/home";
//import { loginReducer as login } from "../routes/Login/modules/login";

import { settingsReducer as settings } from "../routes/Settings/modules/settings";
//import { signupReducer as signup } from "../routes/SignUp/modules/signup";


import { profileReducer as profile } from "../routes/Profile/modules/profile";
//import { userprofileReducer as userprofile } from "../routes/Profile/modules/userprofile";

import { chatsReducer as chats } from "../routes/Chats/modules/chats";
import { composeReducer as compose } from "../routes/Compose/modules/compose";
import { alarmReducer as alarm } from "../routes/Alarm/modules/alarm";





export const makeRootReducer = () => {
    return combineReducers({
        home,
        settings,
        profile,
        chats,
        compose,
        alarm
    })
}

export default makeRootReducer;