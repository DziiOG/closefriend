import 'react-native-gesture-handler';

import {connect} from 'react-redux';

import {
 
} from '../modules/compose';
import Compose from '../components/Compose';

const mapStateToProps = state => ({
 
});

const mapActionsCreators = {
  
};

export default connect(mapStateToProps, mapActionsCreators)(Compose);
