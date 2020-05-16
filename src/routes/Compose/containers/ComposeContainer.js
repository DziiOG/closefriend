import 'react-native-gesture-handler';

import {connect} from 'react-redux';

import {
 getUserComposedData
} from '../modules/compose';
import Compose from '../components/Compose';

const mapStateToProps = state => ({
 composedData: state.compose.composedData,
});

const mapActionsCreators = {
  getUserComposedData
};

export default connect(mapStateToProps, mapActionsCreators)(Compose);
