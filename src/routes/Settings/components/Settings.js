import React, { Component } from 'react'
import { Text, View, Button, Container, Content, Header, Left, Right, InputGroup, Input, Icon, Fab  } from 'native-base'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { ImageBackground, Dimensions, StyleSheet, Keyboard } from 'react-native'
//import HeaderComponent from '../../../Components/Header'
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { ProductConsumer } from '../../../context';
import Background from '../../../Components/Background';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Settings extends Component {
  
   
  
      
    render() {
        return (
            <Background {...this.props} title="Settings" searchBar={true} contentRender={(props)=> (
                <View>
                    <Text>
                        Hello
                    </Text>
                </View>)}>
              
                </Background>
        )
    }
}


var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      
     

    },
  
  });