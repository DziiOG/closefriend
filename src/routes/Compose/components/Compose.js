import React, { Component } from 'react'
import { Text, View, Button, Container, Content, Header, Left, Right, InputGroup, Input, Icon, Fab,   } from 'native-base'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { ImageBackground, Dimensions, StyleSheet, Keyboard } from 'react-native'
//import HeaderComponent from '../../../Components/Header'
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { ProductConsumer } from '../../../context';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker'
import DateFromTime from './Date';
import Background from '../../../Components/Background';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Compose extends Component {
    
 
   
  
      
    render() {
        return (
            <Background {...this.props} title="Compose" searchBar={false} keyboardShouldPersistTaps="always" contentRender={(props)=> (
                    <DateFromTime {...this.props} keyboardShouldPersistTaps="always">

                    </DateFromTime>
                )}>
              
            </Background>
               
                
        )
    }
}


