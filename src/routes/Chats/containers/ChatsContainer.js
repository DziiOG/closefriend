import 'react-native-gesture-handler';

import {connect} from 'react-redux';

import {
 getAllUsers,
 getChatRoomIds,
 getChatMessages,
 getRequiredChatRoomMessages
} from '../modules/chats';
import Chats from '../components/Chats';

const mapStateToProps = state => ({
 users: state.chats.users || [],
 userId: state.signin.userToken.userId || [] || state.signin.userToken.userId,
 chatroomIDs: state.chats.chatroomIDs,
 loading: state.chats.loading,
 messages: state.chats.messages || [],
 requiredMessages: state.chats.requiredMessages || []
});

const mapActionsCreators = {
  getAllUsers,
  getChatRoomIds,
  getChatMessages,
  getRequiredChatRoomMessages
};

export default connect(mapStateToProps, mapActionsCreators)(Chats);
