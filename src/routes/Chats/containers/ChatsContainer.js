import 'react-native-gesture-handler';

import {connect} from 'react-redux';

import {
 getAllUsers,
 getChatRoomIds
} from '../modules/chats';
import Chats from '../components/Chats';

const mapStateToProps = state => ({
 users: state.chats.users || [],
 userId: state.signin.userToken.userId || [] || state.signin.userToken.userId,
 chatroomIDs: state.chats.chatroomIDs,
 loading: state.chats.loading
});

const mapActionsCreators = {
  getAllUsers,
  getChatRoomIds
};

export default connect(mapStateToProps, mapActionsCreators)(Chats);
