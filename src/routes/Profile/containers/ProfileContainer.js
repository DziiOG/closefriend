import 'react-native-gesture-handler';

import {connect} from 'react-redux';

import {
 
} from '../modules/profile';
import Profile from '../components/Profile';

const mapStateToProps = state => ({
 showDifferentUser: state.chats.showDifferentUser
});

const mapActionsCreators = {
  
};

export default connect(mapStateToProps, mapActionsCreators)(Profile);
