import 'react-native-gesture-handler';

import {connect} from 'react-redux';

import {
 getTasksFromFireBase
} from '../modules/alarm';
import Alarm from '../components/Alarm';

const mapStateToProps = state => ({
 userCreatedTasks: state.compose.composedData || [],
 tasks: state.alarm.tasks || [],
 userId: state.signin.userToken.userId || [] || state.signin.userToken.userId
});

const mapActionsCreators = {
  getTasksFromFireBase
};

export default connect(mapStateToProps, mapActionsCreators)(Alarm);
