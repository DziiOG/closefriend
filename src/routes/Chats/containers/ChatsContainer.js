import 'react-native-gesture-handler';

import {connect} from 'react-redux';

import {
 
} from '../modules/chats';
import Chats from '../components/Chats';

const mapStateToProps = state => ({
 
});

const mapActionsCreators = {
  
};

export default connect(mapStateToProps, mapActionsCreators)(Chats);
