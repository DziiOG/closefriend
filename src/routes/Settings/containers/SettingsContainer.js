import 'react-native-gesture-handler';

import {connect} from 'react-redux';

import {
 
} from '../modules/settings';
import Settings from '../components/Settings';

const mapStateToProps = state => ({
 
});

const mapActionsCreators = {
  
};

export default connect(mapStateToProps, mapActionsCreators)(Settings);
