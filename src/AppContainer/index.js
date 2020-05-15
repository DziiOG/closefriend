import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import MyDrawer from '../navigators/DrawerNavigator';
import { ProductProvider } from '../context';







export default class AppContainer extends Component {
    render() {
        return (
            <Provider store={this.props.store}> 
              <ProductProvider>
                    <MyDrawer></MyDrawer>
              </ProductProvider>
               
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
