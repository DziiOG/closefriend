import { combineReducers } from 'redux';

import { homeReducer as home } from "../routes/Home/modules/home";
import { signinscreenReducer as signin } from "../routes/SignIn/modules/signinscreen";

import { settingsReducer as settings } from "../routes/Settings/modules/settings";
import { signupscreenReducer as signup } from "../routes/SignUp/modules/signupscreen";


import { profileReducer as profile } from "../routes/Profile/modules/profile";
import { splashscreenReducer as splash } from "../routes/Splash/modules/splashscreen";

import { chatsReducer as chats } from "../routes/Chats/modules/chats";
import { composeReducer as compose } from "../routes/Compose/modules/compose";
import { alarmReducer as alarm } from "../routes/Alarm/modules/alarm";
import { chatroomReducer as chatroom } from "../routes/ChatRoom/modules/chatroom";





export const makeRootReducer = () => {
    return combineReducers({
        home,
        settings,
        profile,
        chats,
        compose,
        alarm, 
        signup,
        signin,
        splash,
        chatroom

    })
}

export default makeRootReducer;