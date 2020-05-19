import React, { Component, Fragment } from 'react'
import { Text, View, Button, Container, Content, Header, Left, Right, InputGroup, Input, Icon, Fab, Card, CardItem  } from 'native-base'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { Dimensions, TouchableOpacity, Modal, ActivityIndicator } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import {
    Avatar,
    
} from 'react-native-paper';
import axios from 'axios'

import Background from '../../../Components/Background';
import ChatRoom from './ChatRoom'
import ChatRoom2 from './ChatRoom2'
import { ProductConsumer } from '../../../context'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Chats extends Component {
   

    state={
        activeIndex: 0,
        messages: []
    }

    
      componentDidMount(){
          this.props.getAllUsers()
          console.log(

              this.props.users
          )
      }
        
    
   
    renderSection = (value) => {
        if(this.state.activeIndex == 0){
            return(
       
             (this.props.users.length == 0)? (
                <View style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
                    <ActivityIndicator size='large'></ActivityIndicator>
                </View>):
                 

                     this.props.users.map((item, index)=>(
                        
                        <ProductConsumer>
                            {
                                (value)=> (

                                    <View key={index} style={{flexDirection: 'row', marginTop: 0, paddingHorizontal: 15, marginTop: index > 0? 15: 0 }}>                                    
                                        <TouchableOpacity style={{flexDirection: 'column', }}>
                                        <Avatar.Image source={require('../../../assets/kioshi.png')}
                                                    size={50}
                                                    >
                    
                                                    </Avatar.Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{paddingLeft: 25, flexDirection: 'column', borderBottomColor: '#fff', alignItems: 'center', }} onPress={()=> {this.segmentClicked(1); value.getDetail(item)}}>
                                            <Text style={{color: '#fff', fontSize: 14,marginTop: 8}}>{item.fullName}</Text>
                                            <Text style={{color: '#ccc', fontSize: 11 }} note>Web Developer</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                        </ProductConsumer>
     
           
                     ))
                 
           
               
           
            ) 
        }else if( this.state.activeIndex == 1){

            return(
                <ChatRoom value={value}></ChatRoom>
                
            )
        }else if(this.state.activeIndex == 3){
            
                return (
               
                   <ChatRoom2></ChatRoom2>
                
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
                </View>
                
                )}>
              
        </Background>
        
        )
    }
}


