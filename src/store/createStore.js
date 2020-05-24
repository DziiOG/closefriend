
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import makeRootReducer from './reducers';
import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import { signinscreenReducer } from '../routes/SignIn/modules/signinscreen';
import { signupscreenReducer } from '../routes/SignUp/modules/signupscreen';


const log = createLogger({
    diff: true,
    collapsed: true,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['home', 'signup', 'signin', 'profile', 'compose', 'chats', 'alarm', 'settings', 'splash',],
    blacklist: ['chatroom']
  }

  const persistedReducer = persistReducer(persistConfig, makeRootReducer())

export default (initialState = {}) => {
    const middleware = [thunk, log];

    const enhancers = [];

    
    let store1 = createStore(persistedReducer);

    const store = createStore(
       persistedReducer,
       initialState,
        compose(applyMiddleware(...middleware), ...enhancers),
    );

    const persistor = persistStore(store)

    return {store, persistor};
};

