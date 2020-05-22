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
       
       console.log(this.props.route.params.chatroomId)

       this.getFromFire()
      }

    

      componentWillUpdate(){
       //  clearInterval(
         //   this.myInterval
           //  )

          this.getFromFire()
      }
      getFromFire = () => {

          axios.put("https://us-central1-closefriend-1333a.cloudfunctions.net/api/messages/chatroom", {
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
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }
    
      sendToFire = (messages) =>{
            this.onSend(messages)
           axios.post("https://us-central1-closefriend-1333a.cloudfunctions.net/api/messages/chatroom", {
               messages: this.state.messages,
               name: this.props.route.params.chatroomId
           }).then(response=> {
               //console.log(response.data)
               
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
                        _id: this.props.route.params.userId
                    }}
                  />
          
            </Modal>
        )
    }
}

export default ChatRoom
