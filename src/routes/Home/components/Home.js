import React, { Component, Fragment } from 'react'
import { Text, View, Button, Container, Content, Header, Left, Right, InputGroup, Input, Icon, H1, H2, H3, Footer, Fab,   } from 'native-base'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { ImageBackground, Dimensions, StyleSheet, Keyboard } from 'react-native'
//import HeaderComponent from '../../../Components/Header'
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { ProductConsumer } from '../../../context';
import MainDateComponent from './MainDateComponent.js';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Home extends Component {
    state = {
        autoFocus: false,
        searchBarFocused: true,
        date: new Date(),
        active: false
    }

    componentDidMount(){
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardWillHide = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);

        this.callMe();

        
    }


    componentWillUnmount(){
        clearInterval(this.callMe())
    }

    callMe = () => {
        setInterval(()=> {
            this.setState({
                date: new Date()
            })
        }, 1000)
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
     <View style={{flexDirection: 'column', marginTop: 40}}>
         <Text  style={{color: '#fff', paddingLeft: 15, fontSize: 35}}>
            {e[s]} 
         </Text>
         <Text style={{color: '#fff', paddingLeft: 15, fontSize: 30}}>
            {t[n] + " " + r + ", " + i}
         </Text>
         <Text style={{color: '#fff', paddingLeft: 15, fontSize: 25}}>
            {l + ":" + c + ":" + h + " " + o}
         </Text>
     </View>
     </Fragment> 


                                    


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
          <Header style={{backgroundColor: 'transparent', borderColor: 'transparent', borderBottomColor: 'transparent'}}>
                   
                        <Left style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer(); console.log("You pressed me")}}>
                                <Icon1 name="menu" size={30} color="white" ></Icon1>
                            </TouchableOpacity>
                        <View >
                            <Text style={{color: '#fff', paddingLeft: 15}}>
                                Home
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
                    

                            <View style={{backgroundColor: 'transparent', borderColor: 'transparent'}}>
                                  
                                  
                                 {
                                     this.dateTime()
                                 }
                                     
                                 
                                      
                                  
                              
                            
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