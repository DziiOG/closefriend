import React, { Component, Fragment } from 'react'
import { Text, View, Button, Content, Left, Right, InputGroup, Input, Icon, Card, CardItem,  } from 'native-base'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { ImageBackground, Dimensions, StyleSheet, Keyboard, ActivityIndicator } from 'react-native'
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';

import { TouchableOpacity } from 'react-native';
import { ProductConsumer } from '../../../context';

import Background from '../../../Components/Background';
import Geocoder from 'react-native-geocoding';


Geocoder.init("AIzaSyAjL_doMA-BBX1S-Lx_BJXrPAjQCFh3UrM");

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&
exclude=hourly,daily&appid={ce8887d668b25e586fbcb948918be08b}`;

export default class Alarm extends Component {



    state={
        latitude: 0,
        longitude: 0,
        address: "",
        tasks: []
        
    }


    getTasks = () => {
        axios.put("/user/tasks", {
            userId: this.props.userId
        }).then(response=>{
            this.setState({
                tasks: response.data
            })
        }).catch(error=>{
            console.log(error)
        })
    }


    getLocation(){
        Geolocation.getCurrentPosition((position) => {
      
           this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }, () => {
                //console.log(this.state)
                
                axios.post( `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&
                exclude=hourly,daily&appid={ce8887d668b25e586fbcb948918be08b}`).then((response)=>{
                    console.log(response.data)
             
                })



                Geocoder.from(this.state.latitude, this.state.longitude)
                .then(json => {
                        var addressComponent = json.results[0].address_components[0];
                        this.setState({
                            address: addressComponent
                        })

                })
                .catch(error => console.warn(error));

               
               
                
            });
        }, (error) => {
            //Handling Error
            console.log(error);
        }, 
        { enableHighAccuracy: false, timeout: 200000, maximumAge: 100},
        );
      }


    componentDidMount(){
        
       // this.getLocation();

      // this.props.getTasksFromFireBase(this.props.userId)

       console.log(this.props.userId)

       this.getTasks();
        

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
         <Text  style={{color: '#fff', paddingLeft: 15, fontSize: 22, marginBottom: 15}}>
            {e[s]} 
         </Text>
         <Text style={{color: '#ccc', paddingLeft: 15, fontSize: 13, lineHeight: 18}} note>
            {t[n] + " " + r + ", " + i}
         </Text>
     </View>
     </Fragment> 

    }

   

       
    render() {
        return (
          <Background {...this.props} title="Alarm" searchBar={true} contentRender={(props)=> (
          <View style={{padding: 15, position: 'relative'}}>
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
                                    <View style={{flexDirection: 'column',}}>
                                    <Icon1 name="sun"></Icon1>
                                        <Text  style={{color: '#fff', paddingLeft: 15, fontSize: 28, marginBottom: 15}}>
                                            {} 
                                        </Text>
                                        <Text style={{color: '#ccc', paddingLeft: 15, fontSize: 16, lineHeight: 18}} note>
                                            {this.state.address}
                                        </Text>
                                    </View>        
                    </View>
                            <View>
                                <Text>
                                    
                                </Text>
                            </View>

                     </Right>
                 </CardItem>
             </Card>


            <Card  style={{backgroundColor: 'transparent', borderColor: 'transparent', height: height * 0.5}}>
            <Content>

                <CardItem style={{backgroundColor: 'transparent', flex: 1, borderColor: 'transparent'}}>
                    <Content style={{ flexDirection: 'row'}}>

                    {
                        (this.state.tasks.length == 0) ? (
                        <View style={{justifyContent: 'center', alignItems: 'center',}}>
                            <ActivityIndicator size='large'></ActivityIndicator>
                        </View>) :
                            (
                                this.state.tasks.map((element, index)=> (

                                <TouchableOpacity key={index} style={{flexDirection: 'row', marginTop: (index > 0)? 15 : 0}}>
                                            
                                        <View style={{flexDirection: 'column', }}>
                                            <Text style={{color: '#fff', fontSize: 14}}>{new Date(element.time).getHours()}</Text>
                                            <Text style={{color: '#ccc', fontSize: 11}} note>{new Date(element.time).getHours() >= 12? "PM": "AM"}</Text>
                                        </View>
                                        <View style={{paddingLeft: 60, flexDirection: 'column', borderBottomColor: '#fff', }}>
                                            <Text style={{color: '#fff', fontSize: 14}}>{element.title}</Text>
                                            <Text style={{color: '#ccc', fontSize: 11 }} note>{element.task}</Text>
                                        </View>
                                </TouchableOpacity>

                                ))
                            )
                    }
                     
                    


                    </Content>
                </CardItem>
            </Content>
            </Card>


          </View>)}>
        
          </Background>
        )
    }
}
