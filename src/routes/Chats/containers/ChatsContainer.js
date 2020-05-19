import 'react-native-gesture-handler';

import {connect} from 'react-redux';

import {
 getAllUsers
} from '../modules/chats';
import Chats from '../components/Chats';

const mapStateToProps = state => ({
 users: state.chats.users || []
});

const mapActionsCreators = {
  getAllUsers
};

export default connect(mapStateToProps, mapActionsCreators)(Chats);
