import 'react-native-gesture-handler';

import {connect} from 'react-redux';

import {
 getAllUsers,
 getChatRoomIds,
 getChatMessages,
 getRequiredChatRoomMessages,
 getAllChatMessagesFromFirebase
} from '../modules/chats';

import {
  sendToFire
} from '../../ChatRoom/modules/chatroom'
import Chats from '../components/Chats';

const mapStateToProps = state => ({
 users: state.chats.users || [],
 userId: state.signin.userToken.userId || [] || state.signin.userToken.userId,
 chatroomIDs: state.chats.chatroomIDs,
 loading: state.chats.loading,
 messages: state.chats.messages || [],
 requiredMessages: state.chats.requiredMessages || [],
 allMessages: state.chats.allMessages || []
});

const mapActionsCreators = {
  getAllUsers,
  getChatRoomIds,
  getChatMessages,
  getRequiredChatRoomMessages,
  getAllChatMessagesFromFirebase,
  sendToFire
};

export default connect(mapStateToProps, mapActionsCreators)(Chats);
