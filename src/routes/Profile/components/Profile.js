import React, { Component } from 'react'
import { Text, View, Button, Container, Content, Header, Left, Right, InputGroup, Input, Icon , Fab, CardItem, Card } from 'native-base'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { ImageBackground, Dimensions, StyleSheet, Keyboard } from 'react-native'
//import HeaderComponent from '../../../Components/Header'
import LinearGradient from 'react-native-linear-gradient';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { ProductConsumer } from '../../../context';
import Background from '../../../Components/Background';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Profile extends Component {
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
            <Background {...this.props} title="Profile" searchBar={false} contentRender={(props)=> (
                            <View style={{alignItems: 'center', flex: 1, margin: 15}}>
                                <Avatar.Image source={require('../../../assets/kioshi.png')} size={170}>

                                </Avatar.Image>

                                <TouchableOpacity style={{flexDirection: 'row', 
                                padding: 5, 
                                margin: 10, 
                                textAlign: 'center', 
                                borderRadius: 15, 
                                backgroundColor: 'rgba(0,0,0,.4)'
                                }}>
                                    <Text style={{fontSize: 18, fontWeight: '400', paddingRight: 5, color: '#fff'}}>
                                        Avatar Kioshi
                                    </Text>
                                    
                                    <Text style={{fontSize: 12, fontWeight: '400', paddingLeft: 5,textAlign: 'center', borderLeftWidth: 1, margin: 3, color: '#d2d1d2' }}>
                                        A bad ass Avatar
                                    </Text>
                                </TouchableOpacity>
                                <View style={{flexWrap: 'wrap', }}>

                                    <Paragraph style={{textAlign: 'center',margin: 0, color: '#ccc', lineHeight: 24, flexWrap: 'wrap'}}>
                                    Hi, I'm Kioshi from Kioshi, the female Avatar
                                    </Paragraph>
                                </View>
                            </View>
                
                )}>
              
                </Background>
            
































      
        )
    }
}


