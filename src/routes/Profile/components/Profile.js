import React, { Component, Fragment } from 'react'
import { Text, View, Button, Container, Content, Header, Left, Right, InputGroup, Input, Icon , Fab, CardItem, Card } from 'native-base'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { ImageBackground, Dimensions, StyleSheet, Keyboard, Modal, TextInput } from 'react-native'
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
import axios from 'axios';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Profile extends Component {
    state = {
      bio: "",
      occupation: "",
      modal: false,
      loading: false,
      modalBio: "",
      modalOccupation: ""
    }

    componentDidMount(){

        axios.put("/user/profile",{
            userId: this.props.userId
        }).then(response=> {
            this.setState({
                occupation: response.data.Profile.Occupation,
                bio: response.data.Profile.Bio,
            })
        }).catch((error)=>{
            console.log(error)
        })
    }

  

        textInputChange = (val, type) => {
            if(type == "modalBio"){
                this.setState({
                    modalBio: val
                })
            }else if(type == "modalOccupation"){
                this.setState({
                    modalOccupation: val
                })
            }
        }
        
        handleSubmit = () =>{
            if(this.state.modalBio == "" || this.state.modalOccupation == ""){
                alert("None of the Fields must be empty")
            }else{
                this.setState({
                    loading: true
                })
                axios.post("", {}).then((response)=>{
                    console.log(response.data);
                    alert("Profile Updated Successfully");
                    this.setState({
                        loading: false
                    })
                }).catch((error)=>{
                        console.log(error)
                        this.setState({
                            loading: false
                        })                    
                })
            }
        }
  
      
    render() {
        return (
            <Background {...this.props} title="Profile" searchBar={false} contentRender={(props)=> (

                (false) ?  <View style={{alignItems: 'center', flex: 1, margin: 15}}>
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
                                        {this.props.route.params.fullName}
                                    </Text>
                                    
                                    <Text style={{fontSize: 12, fontWeight: '400', paddingLeft: 5,textAlign: 'center', borderLeftWidth: 1, margin: 3, color: '#d2d1d2' }}>
                                        {this.props.route.params.occupation}
                                    </Text>
                                </TouchableOpacity>
                                <View style={{flexWrap: 'wrap', }}>

                                    <Paragraph style={{textAlign: 'center',margin: 0, color: '#ccc', lineHeight: 24, flexWrap: 'wrap'}}>
                                    {this.props.route.params.bio}
                                    </Paragraph>
                                </View>
                            </View> :
                            <Fragment>
                                <View style={{alignItems: 'center', flex: 1, margin: 15}}>
                                    <Avatar.Image source={require('../../../assets/kioshi.png')} size={170}>

                                    </Avatar.Image>
                                    <TouchableOpacity style={{margin: 15}} onPress={()=>{
                                        this.setState({
                                            modal: true
                                        })
                                    }}>
                                        <Text style={{color: "#fff"}}>
                                            Edit Profile
                                        </Text>
                                    </TouchableOpacity>

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
                                <Modal visible={this.state.modal} transparent={true} >
                                    <View  style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems:'center', }}>
                                        <View  style={{
                                            width: width * 0.9, 
                                            height: height *0.5,  
                                            backgroundColor: "#fff", 
                                            borderBottomLeftRadius: 30,
                                            borderTopRightRadius: 30,  
                                            borderTopLeftRadius: 30,
                                            borderBottomRightRadius: 30,}}>
                                             <View>
                                                <View style={{alignItems: 'center', margin: 15}}>
                                                    <Text>Edit Profile here</Text>
                                                </View>
                                                 <Text style={{
                                                     paddingHorizontal: 15 ,
                                                    color: '#05375a',
                                                     fontSize: 18}}>Occupation</Text>
                                                     <View style={{
                                                                     flexDirection: 'row',
                                                                    marginTop: 10,
                                                                    borderBottomWidth: 1,
                                                                    borderBottomColor: '#f2f2f2',
                                                                    paddingBottom: 5}}>             
                                                        
                                                        <TextInput 
                                                        placeholder="Occupation" 
                                                        style={{
                                                             flex: 1,
                                                                marginTop: Platform.OS === 'ios' ? 0 : -12,
                                                                paddingLeft: 15,
                                                                color: '#05375a'}}
                                                        autoCapitalize="none"
                                                        onChangeText={(val)=> this.textInputChange(val, 'modalOccupation')}
                                                        ></TextInput>
                                
                                                        </View>
                                                        
                                                 <Text style={{
                                                     paddingHorizontal: 15 ,
                                                    color: '#05375a',
                                                    marginTop: 15,
                                                     fontSize: 18}}>Tell us something about yourself</Text>
                                                     <View style={{
                                                                     flexDirection: 'row',
                                                                    marginTop: 10,
                                                                    borderBottomWidth: 1,
                                                                    borderBottomColor: '#f2f2f2',
                                                                    paddingBottom: 5}}>             
                                                        
                                                        <TextInput 
                                                        placeholder="Bio" 
                                                        style={{
                                                             flex: 1,
                                                                marginTop: Platform.OS === 'ios' ? 0 : -12,
                                                                paddingLeft: 15,
                                                                color: '#05375a'}}
                                                        autoCapitalize="none"
                                                        onChangeText={(val)=> this.textInputChange(val, 'modalBio')}
                                                        ></TextInput>
                                
                                                        </View>

                                                        <View style={{justifyContent: 'center', alignItems: 'center', margin: 15}}>

                                                            <TouchableOpacity disabled={this.state.loading} style={{ 
                                                                width: width * 0.4,
                                                                height: 50,
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                borderRadius: 10,}}
                                                            onPress={()=>{this.handleSubmit()}}
                                                            >
                                                                <LinearGradient
                                                                    colors={["rgba(90, 93, 165, 1)","rgba(0, 0, 0, .7)"]}
                                                                                        style={{ 
                                                                                                width: '100%',
                                                                                                height: 50,
                                                                                                justifyContent: 'center',
                                                                                                alignItems: 'center',
                                                                                                borderRadius: 10,}}
                                                                                                                >
                                                                    <Text style={[{
                                                                                        fontSize: 18,
                                                                                        fontWeight: 'bold'}, {
                                                                        color: '#fff'
                                                                    }]}> Save</Text>
                                                                </LinearGradient>
                                                            </TouchableOpacity>
                                                        </View>
                                                        <View style={{justifyContent: 'center', alignItems: 'center', margin: 5}}>
                                                            <TouchableOpacity onPress={()=>{this.setState({
                                                                modal: false,  
                                                                modalBio: "",
                                                                modalOccupation: ""})}}>
                                                                <Text style={{color: "rgba(90, 93, 165, 1)"}}>Cancel</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                             </View>   
                                        </View>

                                    </View>
                                </Modal>
                    
                            </Fragment>
                )}>
              
                </Background>
            
































      
        )
    }
}


