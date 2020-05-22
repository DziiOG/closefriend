import 'react-native-gesture-handler';

import {connect} from 'react-redux';

import {
 
} from '../modules/chatroom';
import ChatRoom from '../components/ChatRoom';

const mapStateToProps = state => ({

});

const mapActionsCreators = {
  
};

export default connect(mapStateToProps, mapActionsCreators)(ChatRoom);
