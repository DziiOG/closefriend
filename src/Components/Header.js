import React, { Component } from 'react'
import {Header, View, Text, Left, Icon, Right } from 'native-base'
import {TouchableOpacity, Dimensions} from 'react-native'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { ProductConsumer } from '../context';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default class HeaderComponentforAll extends Component {
    render() {
        return (
            <Header style={{backgroundColor: 'transparent',}}>
                   
            <Left style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer(); console.log("You pressed me")}}>
                    <Icon1 name="menu" size={30} color="white" ></Icon1>
                </TouchableOpacity>
            <View >
                <Text style={{color: '#fff', paddingLeft: 15}}>
                    Alarm
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
        )
    }
}
