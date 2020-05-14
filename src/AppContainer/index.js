import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
//import MyDrawer from '../routes/drawerNavigator';
//import { ProductProvider } from '../../context';





export default class AppContainer extends Component {
    render() {
        return (
            <Provider store={this.props.store}> 
               
            </Provider>
        )
    }
}

/*
<MyDrawer></MyDrawer>
                    <MyTabs></MyTabs>
*/

AppContainer.propTypes = {
    store: PropTypes.object.isRequired,
};
