import React, { Component, Fragment } from 'react'
import { Text, View, Button, Content, Left, Right, InputGroup, Input, Icon, Card, CardItem,  } from 'native-base'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { ImageBackground, Dimensions, StyleSheet, Keyboard } from 'react-native'
import axios from 'axios';

import { TouchableOpacity } from 'react-native';
import { ProductConsumer } from '../../../context';

import Background from '../../../Components/Background';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&
exclude=hourly,daily&appid={ce8887d668b25e586fbcb948918be08b}`;

export default class Alarm extends Component {


    componentDidMount(){

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
     <View style={{flexDirection: 'column',}}>
         <Text  style={{color: '#fff', paddingLeft: 15, fontSize: 28, marginBottom: 15}}>
            {e[s]} 
         </Text>
         <Text style={{color: '#fff', paddingLeft: 15, fontSize: 16, lineHeight: 18}} note>
            {t[n] + " " + r + ", " + i}
         </Text>
     </View>
     </Fragment> 

    }
       
    render() {
        return (
          <Background {...this.props} title="Alarm" searchBar={true} contentRender={(props)=> (
          <View>
             <Card style={{backgroundColor: 'transparent', borderColor: 'transparent'}}>
                 <CardItem style={{backgroundColor: 'transparent', flex: 1, borderColor: 'transparent'}}>
                     <Left style={{flexDirection:'column'}}>
                            <View style={{paddingRight: 50}}>
                                
                                   {
                                     this.dateTime()  
                                   }
                               
                            </View>
                            <View>
                                <Text note>

                                </Text>
                            </View>
                     </Left>
                     <Right style={{flexDirection:'column'}}>
                     <View>
                              {
                                  this.dateTime()
                              }
                    </View>
                            <View>
                                <Text>
                                    
                                </Text>
                            </View>

                     </Right>
                 </CardItem>
             </Card>
          </View>)}>
        
          </Background>
        )
    }
}
