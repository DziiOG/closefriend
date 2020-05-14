import { combineReducers } from 'redux';

import { homeReducer as home } from "../routes/Home/modules/home";
//import { loginReducer as login } from "../routes/Login/modules/login";

import { settingsReducer as settings } from "../routes/Settings/modules/settings";
//import { signupReducer as signup } from "../routes/SignUp/modules/signup";


import { profileReducer as profile } from "../routes/Profile/modules/profile";
//import { userprofileReducer as userprofile } from "../routes/Profile/modules/userprofile";





export const makeRootReducer = () => {
    return combineReducers({
        home,
        
        settings,
        
    
        profile,
    
       
    })
}

export default makeRootReducer;