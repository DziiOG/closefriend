import React, { Component, Fragment } from 'react'
import { Text, View, Dimensions, Modal, BackHandler } from 'react-native'
import { Container } from 'native-base'
import { GiftedChat } from 'react-native-gifted-chat'
import { Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import axios from 'axios'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export class ChatRoom extends Component {

    state={
    
        messages: [] || this.props.route.params.messages,
        date: new Date()
        
    }

    

    componentDidMount() {

    
      this.myInterval = setInterval(()=>{
        this.getFromFire()
    }, 5000)
       
       //this.getFromFire()
      this.backhandler = BackHandler.addEventListener('hardwareBackPress', this.set)

      //console.log(this.state.messages.length)
      console.log(this.props.requiredMessages)
      }

     
      set = () => {
       
        this.onThego()
        
         this.setState({
           messages: []
         })
      }

    
      componentWillUnmount(){
        clearInterval(this.myInterval)
    }


      onThego = (messages = []) => {
       // let messages = this.state.messages;
        let chatroomId = this.props.route.params.chatroomId

        const saveMessages = 
          {

            messages:  GiftedChat.append(this.state.messages, messages),
            chatroomId: chatroomId
          }
        
        


      
        this.props.getChatMessages(saveMessages)

          
          

      
      }


      getFromFire = () => {
       
        
          axios.put("/messages/chatroom", {
            name: this.props.route.params.chatroomId
          }).then((response)=>{
            this.setState({
              messages: response.data.messages
            })
          })
          .catch(err=> err.code)


      }
    
      onSend(messages = []) {

        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages.length == 0? this.props.requiredMessages : previousState.messages, messages),
        }))

       
      }
    
      sendToFire = (messages) =>{
            this.onSend(messages)

           axios.post("/messages/chatroom", {
               messages:  GiftedChat.append(this.state.messages, messages),
               name: this.props.route.params.chatroomId
           }).then(response=> {
               //console.log(response.data)
               
           })
           .catch(error=> console.log(error))
      }




    render() {

     
                      if(Platform.OS === 'android'){
                        return (
                         <Fragment>

                            <GiftedChat
                            messages={this.state.messages}
                            onSend={messages => {
                              this.sendToFire(messages)
                             // this.onThego(messages)
                            }}
                            user={{
                                _id: this.props.route.params.userId
                            }}
                        />
                          
                            
                          
                         </Fragment>
                            
                        )
                      }


                     
    }
}

export default ChatRoom
