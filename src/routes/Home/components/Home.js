import React, { Component, Fragment } from 'react'
import { Text, View, Button, Container, Content, Header, Left, Right, InputGroup, Input, Icon, H1, H2, H3, Footer, Fab,   } from 'native-base'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { ImageBackground, Dimensions, StyleSheet, Keyboard } from 'react-native'
//import HeaderComponent from '../../../Components/Header'
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';
import axios from 'axios'

import MainDateComponent from './MainDateComponent.js';
import Background from '../../../Components/Background';
import { ProductConsumer } from '../../../context.js';
import Username from './name/index.js';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Home extends Component {
    state = {        
        date: new Date(),
        username: ''
    }

    componentDidMount(){
        this.myInterval = setInterval(()=>{
            this.setState({
                date: new Date()
            })
        }, 1000)


        
        //console.log(this.props.userID)

       
       


    }

    componentWillUnmount(){
        clearInterval(this.myInterval)
    }
   



  

    dateTime = () => {
        var e = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"),
                            t = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"),
                            a = new Date,
                            i = a.getYear();
                    1e3 > i && (i += 1900);
                    var s = a.getDay(),
                            n = a.getMonth(),
                            r = a.getDate();
                    10 > r && (r = "0" + r);
                    var l = a.getHours(),
                            c = a.getMinutes(),
                            h = a.getSeconds(),
                            o = "AM";
     return l >= 12 && (o = "PM"), l > 12 && (l -= 12), 0 == l && (l = 12), 9 >= c && (c = "0" + c), 9 >= h && (h = "0" + h),  <Fragment>
     <View style={{flexDirection: 'column', marginTop: 40}}>
         <Text  style={{color: '#fff', paddingLeft: 15, fontSize: 35}}>
            {e[s]} 
         </Text>
         <Text style={{color: '#fff', paddingLeft: 15, fontSize: 30}}>
            {t[n] + " " + r + ", " + i}
         </Text>
         <Text style={{color: '#fff', paddingLeft: 15, fontSize: 25}}>
            {l + ":" + c + ":" + h + " " + o}
         </Text>
     </View>
     </Fragment> 

    }


   

    
   
  
      
    render() {
        return (
            <Background {...this.props} date={this.dateTime} title="Home" searchBar={true} contentRender={(props)=> (
                            <View style={{backgroundColor: 'transparent', borderColor: 'transparent'}}>
                                 {
                                     this.dateTime()
                                 }
                                 
                                
                               
                            </View>
                )}>
              
            </Background>
                     
        )
    }
}


var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      
     

    },
  
  });