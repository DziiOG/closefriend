import React, { Component } from 'react'
import { Text, View, Dimensions, Modal } from 'react-native'
import { Container } from 'native-base'
import { GiftedChat } from 'react-native-gifted-chat'
import axios from 'axios'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export class ChatRoom extends Component {
    state={
    
        messages: []
    }

    componentDidMount() {
        /*
        this.setState({
          messages: [
            {
              _id: 1,
              text: 'Hello developer',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
          ],
        })
        */

       // this.myInterval = setInterval(()=> this.getFromFire(), 3500)
        //this.getFromFire()
        axios.put("https://us-central1-closefriend-1333a.cloudfunctions.net/api/messages/chatroom", {
          name: "testChatroom"
        }).then((response)=>{
          this.setState({
            messages: response.data.messages
          })
        }).catch(err=> err.code)
       
       
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
       //this.getFromFire()

       
      }

      componentWillUnmount(){
       //  clearInterval(
         //   this.myInterval
           //  )

          // this.getFromFire()
      }
      getFromFire = () => {
          axios.put("https://us-central1-closefriend-1333a.cloudfunctions.net/api/user/messages",{
              //userId: this.props.value.chatDetails.userId
              userId: "GUILHn3NDDfOSclJwsyQ0erGsI32"
          }).then(res=> {
              console.log(res.data);
              if(res.data.length !== 0){

                  var sizeOfResponse = res.data.length
                  res.data.forEach((element, index)=>{

                    
                      if(1){
                       this.setState(previousState => ({
                           messages: GiftedChat.append(previousState.messages, [
                               {
                                 _id: index, 
                                 text: element.text,
                                 createdAt:new Date(element.timestamp),
                                 user: {
                                   _id: element.user._id,
                                   name:  this.props.value.chatDetails.fullName,
                                   avatar: 'https://placeimg.com/140/140/any',
                                 },
                               },
                             ],)
                       })
                       
                       )
                       
                      }
                  })

                
              } else {
                  console.log("No messages")
              }

              /*
           this.setState(previousState => ({
               messages: GiftedChat.append(previousState.messages, [
                   {
                     _id: "GUILHn3NDDfOSclJwsyQ0erGsI32",
                     text: res.data.text,
                     createdAt: new Date(res.data.createdAt),
                     user: {
                       _id: "rwgbrrto6YgKJkVqpPaMjiuj0zI2",
                       name: 'William',
                       avatar: 'https://placeimg.com/140/140/any',
                     },
                   },
                 ],)
           })
           
           )*/
       
       }
          ).then(()=>{
            axios.put("https://us-central1-closefriend-1333a.cloudfunctions.net/api/messages", {
              //fullName: this.props.value.chatDetails.fullName
               fullName: "Whitson"
            }).then(response=> {
                //console.log(response.data)
                //this.onSend(messages)
                return response.data
            }).then((response)=>{ 
                //console.log(this.state.messages)
            
                //return response
            }
            )
            .then((response)=>{
                
            })
            .catch(error=> console.log(error))
          })
          .catch(err=>console.log(err))
      }
    
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }
    
      sendToFire = (messages) =>{
           axios.post("https://us-central1-closefriend-1333a.cloudfunctions.net/api/messages", {
               messages: messages,
               fullName: "Lafa"
           }).then(response=> {
               //console.log(response.data)
               this.onSend(messages)
               return response.data
           }).then((response)=>{ 
               //console.log(this.state.messages)
           
               return response
           }
           )
           .then((response)=>{
            axios.post("https://us-central1-closefriend-1333a.cloudfunctions.net/api/messages/chatroom", {
              messages: this.state.messages,
              name: "testChatroom"
          }).then(response=> {
              //console.log(response.data)
              //this.onSend(messages)
              return response.data
          }).then((response)=>{ 
              //console.log(this.state.messages)
          
              return response
          }
          )
          .then((response)=>{
           
          })
          .catch(error=> console.log(error))
           })
           .catch(error=> console.log(error))
      }




    render() {
        return (
            <Modal>

          
              
               <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.sendToFire(messages)}
                    user={{
                        _id: 56
                    }}
                  />
          
            </Modal>
        )
    }
}

export default ChatRoom
