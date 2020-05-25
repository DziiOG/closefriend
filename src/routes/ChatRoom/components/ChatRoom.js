import React, { Component, Fragment } from 'react'
import { Text, View, Dimensions, Modal, BackHandler } from 'react-native'
import { Container } from 'native-base'
import { GiftedChat } from 'react-native-gifted-chat'
import { Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import axios from 'axios'
import Fire from '../Fire';
import ChatComponent from './ChatComponent'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;




    

    
  
/*
    componentDidMount() {
    
    
      this.myInterval = setInterval(()=>{
        this.getFromFire()
    }, 5000)
       
       //this.getFromFire()
      this.backhandler = BackHandler.addEventListener('hardwareBackPress', () => this.set)

      //console.log(this.state.messages.length)
      console.log(this.props.requiredMessages)
      }

     
      set = () => {
       
       console.log("I pressed back")
        
         this.setState({
           messages: []
         })
        
      }

    
      componentWillUnmount(){
        clearInterval(this.myInterval)
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
               messages: [...this.state.messages, messages] ,
               name: this.props.route.params.chatroomId
           }).then(response=> {
               //console.log(response.data)
               
           })
           .catch(error=> console.log(error))
      }

    */
 /*
   componentDidMount(){
  
    this.get = axios.get(`https://closefriend-1333a.firebaseio.com/${this.props.route.params.chatroomId}`).then((response)=>{
      console.log(response.data);
    })


this.get = axios.get(`https://gpstracker-89342.firebaseio.com/messages`).then((response)=>{
  console.log(response.data);
})


    

}

componentWillUnmount(){
    clearInterval(this.get)
}

sendtofire = (messages = []) => {

  this.setState({
    messages: GiftedChat.append(this.state.messages, messages)
  })

  axios.post(`https://closefriend-1333a.firebaseio.com/${this.props.route.params.chatroomId}/messages.json`,{
     messages
  }).then((response)=>{
      console.log(response.data);
    }).catch(error=>{
      console.log(error)
    })
}
if(Platform.OS === 'android'){
    return (
     <Fragment>

        <GiftedChat
        messages={}
        onSend={}
        user={{
            _id: this.props.route.params.userId
        }}
    />
      
     </Fragment>
        
    )
  }

*/
    



export default class ChatRoom extends Component {

          state= {
            messages: []
          }

          componentDidMount(){
            Fire.get(
                (messages = []) => this.setState(previous => ({
                    messages: GiftedChat.append(previous.messages, messages)
                }))
            )
        }
    
        componentWillUnmount(){
            Fire.off();
        }

  render() {
    if(Platform.OS === 'android'){
      return (
       <Fragment>
  
          <GiftedChat
          messages={this.state.messages}
          onSend={Fire.send}
          user={{
              _id: this.props.route.params.userId
          }}
      />
        
       </Fragment>
          
      )
    }
  
  }
}



