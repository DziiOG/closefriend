import 'react-native-gesture-handler';

import {connect} from 'react-redux';

import {
 getUserName
} from '../modules/home';
import Home from '../components/Home';

const mapStateToProps = state => ({
    userToken: state.signin.userToken || {} || state.signup.userToken,
    userID: state.signin.userID || {} || state.signup.userID,
    username: state.signin.username || ""
    
});

const mapActionsCreators = {
  getUserName
};

export default connect(mapStateToProps, mapActionsCreators)(Home);
