import React, { Component, Fragment } from 'react'
import { Text, View, Button, Container, Content, Header, Left, Right, InputGroup, Input, Icon, Fab, Card, CardItem, ActionSheet  } from 'native-base'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { Dimensions, TouchableOpacity, Modal, ActivityIndicator } from 'react-native'
import {
    Avatar, Divider,
    
} from 'react-native-paper';
import axios from 'axios'
import Background from '../../../Components/Background';
import { ProductConsumer } from '../../../context'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

var Buttons = ['Message', 'View Profile'];

var DESTRUCTIVE_INDEX = 2;
var CANCEL_INDEX = 3;


const checkIfChatRoomExists = (id1, id2, chatroomIds)  => {
    let results = id1 + id2 
    chatroomIds.forEach(element => {
        if(element.userId.localeCompare(id1 + id2) == 0){
           
           results = id1 + id2; 
        }else if(element.userId.localeCompare(id2 + id1) == 0){
            results = id2 + id1
        } 
    });


   return results 
}


export default class Chats extends Component {
   

    state={
        activeIndex: 0,
        chatrooms: [] || this.props.chatroomIDs,
        
    }

    
      componentDidMount(){
          this.props.getAllUsers()
         
            //console.log(checkIfChatRoomExists('pro', 'main', this.state.chatrooms))

           this.props.getChatRoomIds();

          console.log(this.props.users);
          console.log(this.props.chatroomIDs)

         

      }
        
      componentDidUpdate(){
         // console.log(this.state
      }
    
   
    renderSection = (value) => {
        if(this.state.activeIndex == 0){
            return(
       
             (this.props.users.length == 0)? (
                <View style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
                    <ActivityIndicator size='large'></ActivityIndicator>
                </View>):
                 

                     this.props.users.map((item, index)=>(
                        
                        <ProductConsumer key={item.userId}>
                            {
                                (value)=> item.userId !== this.props.userId ? (
                                    

                                    <View key={item.userId} style={{flexDirection: 'row', marginTop: 0, paddingHorizontal: 15, marginTop: index > 0? 15: 0 , width: width}}>   
                                    <Divider style={{borderColor: '#fff'}} ></Divider>                                 
                                        <TouchableOpacity style={{flexDirection: 'column', }} onPress={()=>{
                                         

                                        }}>
                                        <Avatar.Image source={require('../../../assets/kioshi.png')}
                                                    size={50}
                                                    >
                    
                                                    </Avatar.Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{paddingLeft: 25, flexDirection: 'column', borderBottomColor: '#fff', alignItems: 'center', }} onPress={()=> {
                                           
                                               ActionSheet.show(
                                                             {
                                                                        options: Buttons,
                                                                        cancelButtonIndex: CANCEL_INDEX,
                                                                        destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                                                        title: "Actions"
                                                             },
                                                             buttonIndex => {
                                                                    this.setState({ clicked: Buttons[buttonIndex] },
                                                                        ()=> {
                                                                            if(this.state.clicked == "View Profile"){
                                                                                this.props.navigation.navigate("Profile")
                                                                            }else if(this.state.clicked == "Message"){
                                                                              //  this.props.getRequiredChatRoomMessages(this.props.messages, checkIfChatRoomExists(item.userId, this.props.userId, this.state.chatrooms))

                                                                                this.props.navigation.navigate("ChatRoom", {
                                                                                    chatroomId:  checkIfChatRoomExists(item.userId, this.props.userId, this.state.chatrooms) ,
                                                                                    messages:  [] ,
                                                                                    profileId: item.userId,
                                                                                    name: item.username,
                                                                                    userId:this.props.userId,
                                                                                   // getMessages: this.props.getChatMessages 
                                                                                })
                                                                            }
                                                                        }
                                                                    );
                                                                }
                                            )
                                        }}>
                                        <View>
                                            <Text style={{color: '#fff', fontSize: 14,marginTop: 8, }}>{item.usernsme}</Text>
                                            
                                            <Text style={{color: '#ccc', fontSize: 11 }} note>Web Developer</Text>
                                        </View>
                                        </TouchableOpacity>
                                        
                                        <View style={{left: 80, alignItems: 'center', justifyContent: 'center'}}>
                                            <TouchableOpacity>
                                                <Icon name="ios-checkmark-circle-outline" size={1}>

                                                </Icon>
                                            </TouchableOpacity>
                                        </View>
                                        
                                        <Divider style={{borderColor: '#fff'}} ></Divider>
                                    </View>
                                ) : (
                                    null
                                )
                            }
                        </ProductConsumer>
     
           
                     ))
                 
           
               
           
            ) 
        }else if( this.state.activeIndex == 1){

            return(
               <Container style={{backgroundColor: '#fff'}}>
                <Content>

                </Content>
               </Container>
            )
        }else if(this.state.activeIndex == 3){
            
                return (
               
                   <View>

                   </View>
                
                )
            
        }
    }


    renderSectionOne = () => {
        
       
        
        
    }

    renderSectionTwo = () => {
        
       <View>

       </View>
    }

    renderSectionThree = () => {
        <View>

        </View>
        
    }

    segmentClicked = (index) => {
        this.setState({
            activeIndex: index
        })
    }
  
      
    render() {
        
        return (
            
        
            <Background {...this.props} title="Chats" searchBar={true} contentRender={(props)=> 
            (
                (this.props.users.length !== 0 && this.props.loading == false)?
                <View style={{padding: 15, position: 'relative'}}>
               
                    <Card style={{backgroundColor: 'transparent', borderColor: 'transparent', height: height * 0.7}}>
                    
                                    <CardItem style={{backgroundColor: 'transparent'}}>
                                    <View style={{backgroundColor: 'transparent'}}>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 5, backgroundColor: 'transparent'}}>
                                                <TouchableOpacity 
                                                onPress={()=> this.segmentClicked(0)}
                                                active={this.state.activeIndex == 0}
                                                style={{
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    width: 73, 
                                                    height: 37, 
                                                    backgroundColor:'transparent',
                                                    }}
                                                >
                                                        <Text  style={{fontSize: 12, textTransform: 'uppercase', color: this.state.activeIndex == 0 ? '#fff': '#aaa', textDecorationLine:this.state.activeIndex == 0 ? 'underline': 'none'}}>
                                                            USERS
                                                        </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                onPress={()=> this.segmentClicked(1)}
                                                active={this.state.activeIndex == 1}
                                                style={{
                                                
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    width: 73, 
                                                    height: 37, 
                                                    backgroundColor:'transparent',
                                                    }}
                                                >
                                                    <Text  style={{fontSize: 12, textTransform: 'uppercase', color: this.state.activeIndex == 1 ? '#fff': '#aaa', textDecorationLine:this.state.activeIndex == 1 ? 'underline': 'none'}}>
                                                            Messages
                                                        </Text>
                                                </TouchableOpacity>
                                                
                                               
                                        </View>

                                        

                                </View>
                                    </CardItem>

                    
                        <Content style={{marginTop: 0}}>
                            <CardItem style={{backgroundColor: 'transparent', flex: 1, borderColor: 'transparent'}}>
                                <Content style={{ flexDirection: 'row'}}>
                                    
                                  <View>
                                  <ProductConsumer>
                                      {
                                          (value)=> 

                                          (

                                                this.renderSection(value)
                                          )
                                      }
                                  </ProductConsumer>
                                  </View>
                                </Content>
                            </CardItem>
                        </Content>
                    </Card>
                </View> : <View style={{
                    color: "rgba(90, 93, 165, 1)",
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <ActivityIndicator size="large"></ActivityIndicator>
                </View>
                
                )}>
              
        </Background>
        
        )
    }
}


