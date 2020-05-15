import React, { Component } from 'react'
import { Text, View, Button, Container, Content, Header, Left, Right, InputGroup, Input, Icon, Footer, Fab  } from 'native-base'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { ImageBackground, Dimensions, StyleSheet, Keyboard } from 'react-native'
//import HeaderComponent from '../../../Components/Header'
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { ProductConsumer } from '../../../context';
import HeaderComponentforAll from '../../../Components/Header';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Alarm extends Component {
    state = {
        autoFocus: false,
        searchBarFocused: true,
        active: false
    }

    componentDidMount(){
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardWillHide = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    }

    changeFocus= () => {
        //console.log(this.state.autoFocus)
        if(this.state.autoFocus == false) {
            this.setState({
                autoFocus: true
            })
            //console.log(this.state.autoFocus)
        }else if (this.state.autoFocus == true) {
            this.setState({
                autoFocus: false
            })
            //console.log(this.state.autoFocus)
        }
    }
  
      keyboardDidShow = () => {

        this.setState({searchBarFocused: false})
    }

    keyboardWillHide = () => {
        this.setState({searchBarFocused: true})
        this.changeFocus()
    }

   
  
      
    render() {
        return (
            <Container style={{backgroundColor: 'transparent'}}>
            <ImageBackground style={{
                width: width, 
                height:height, 
                margin: 'auto',
                overflow: 'hidden',
                position: 'relative',
                }} source={require('../../../assets/background.png')}>
          <LinearGradient colors={["rgba(90, 93, 165, 1)","rgba(0, 0, 0, .7)", ]} style={styles.linearGradient}>
                <Content>
                   

                    <HeaderComponentforAll></HeaderComponentforAll>
                    
                </Content>
                <View style={{ flex: 1, marginBottom: 15 }}>
                                    <Fab
                                        active={this.state.active}
                                        direction="up"
                                        containerStyle={{ 
                                          
                                        }}
                                        style={{ backgroundColor: '#5067FF' }}
                                        position="bottomRight"
                                        onPress={() => this.setState({ active: !this.state.active })}>
                                        <Icon1 name="home-outline" />
                                        <TouchableOpacity style={{ backgroundColor: '#34A34F' }}  onPress={() =>this.props.navigation.navigate('Chats')}>
                                        <Icon1  size={25} color="#fff" name="wechat" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ backgroundColor: '#3B5998' }} onPress={() =>this.props.navigation.navigate('Profile')}>
                                        <Icon1  size={25} color="#fff" name="face-profile" />
                                        </TouchableOpacity>
                                        <TouchableOpacity  style={{ backgroundColor: '#DD5144' }} onPress={() =>this.props.navigation.navigate('Compose')}>
                                        <Icon1 size={25} color="#fff" name="bookmark-outline" />
                                        </TouchableOpacity>
                                        <TouchableOpacity  style={{ backgroundColor: '#DD5144' }} onPress={() =>{this.props.navigation.navigate('Alarm')}}>
                                        <Icon1  size={25} color="#fff" name="clock-outline"  onPress={() =>{this.props.navigation.navigate('Alarm')}} />
                                        </TouchableOpacity>
                                    </Fab>
                                </View>
          </LinearGradient>
            </ImageBackground>
          </Container>
        )
    }
}


var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      
     

    },
  
  });