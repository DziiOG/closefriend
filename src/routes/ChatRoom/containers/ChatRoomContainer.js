import 'react-native-gesture-handler';

import {connect} from 'react-redux';

import {
 setRequiredMessagesToEmptyArray
} from '../modules/chatroom';
import {
    getChatMessages,
    getRequiredChatRoomMessages
} from '../../Chats/modules/chats'
import ChatRoom from '../components/ChatRoom';

const mapStateToProps = state => ({
messages: state.chats.messages || [],
requiredMessages: state.chatroom.requiredMessages || []
});

const mapActionsCreators = {
getChatMessages,
getRequiredChatRoomMessages,
setRequiredMessagesToEmptyArray
};

export default connect(mapStateToProps, mapActionsCreators)(ChatRoom);
