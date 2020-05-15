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
            <Container style={{backgroundColor: 'transparent'}}>
            <ImageBackground style={{
                width: width, 
                height:height, 
                margin: 'auto',
                overflow: 'hidden',
                position: 'relative',
                }} source={require('../../../assets/background.png')}>
          <LinearGradient colors={["rgba(90, 93, 165, 1)","rgba(0, 0, 0, .7)", ]} style={styles.linearGradient}>
                    <Header style={{backgroundColor: 'transparent',}}>
                   
                        <Left style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer(); console.log("You pressed me")}}>
                                <Icon1 name="menu" size={30} color="white" ></Icon1>
                            </TouchableOpacity>
                        <View >
                            <Text style={{color: '#fff', paddingLeft: 15}}>
                                Profile
                            </Text>
                        </View>
                        </Left>

                        <Right>
                        <ProductConsumer>
                            {
                                (value) => (
                                    (this.state.autoFocus) &&
                                    <InputGroup style={{width: width * 0.5}}>
                                        <Input  placeholder="Search Here"  autoFocus={true} placeholderTextColor="#d2d2d2" underlineColorAndroid="#fff"  style={{ fontSize: 15, width: 10}}>
                                        </Input>                                       
                                    </InputGroup>
                                )
                            }
                        </ProductConsumer>
                            {
                                
                                        <TouchableOpacity onPress={()=>{ this.changeFocus()} } style={{right: 0}}>
                                            <Icon name="search" size={10} style={{color: '#fff'}} ></Icon>
                                        </TouchableOpacity>
                            }
                        
                        </Right>
                    </Header>
                <Content>
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