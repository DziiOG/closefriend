import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import MyDrawer from '../navigators/DrawerNavigator';
import { ProductProvider } from '../context';
import { PersistGate } from 'redux-persist/integration/react'
import { ActivityIndicator } from 'react-native';
import { Root } from 'native-base';







export default class AppContainer extends Component {
    render() {
        return (
            <Provider store={this.props.store}> 
                <PersistGate loading={<ActivityIndicator></ActivityIndicator>} persistor={this.props.persistor}>
                    <ProductProvider>
                        <Root>
                                <MyDrawer></MyDrawer>
                        </Root>
                    </ProductProvider>
                </PersistGate>
               
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
