import 'react-native-gesture-handler';

import {connect} from 'react-redux';

import {
 
} from '../modules/alarm';
import Alarm from '../components/Alarm';

const mapStateToProps = state => ({
 
});

const mapActionsCreators = {
  
};

export default connect(mapStateToProps, mapActionsCreators)(Alarm);