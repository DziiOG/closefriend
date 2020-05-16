import React, { Component } from 'react'
import { View, Container, Content, Text } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground, Dimensions, StyleSheet, Keyboard } from 'react-native'
import FloatingActionBars from './FloatingActionBars';
import HeaderComponentforAll from './Header';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default class Background extends Component {
    render() {
        return (
            <Container style={{backgroundColor: 'transparent'}}>
            <ImageBackground style={{
                width: width, 
                height:height, 
                margin: 'auto',
                overflow: 'hidden',
                position: 'relative',
                }} source={require('../assets/background.png')}>
          <LinearGradient colors={["rgba(90, 93, 165, 1)","rgba(0, 0, 0, .7)", ]} style={styles.linearGradient}>
            <HeaderComponentforAll {...this.props}></HeaderComponentforAll>
                <Content keyboardShouldPersistTaps="always">
                   {
                       this.props.contentRender()
                   }
                </Content>
          </LinearGradient>
            </ImageBackground>
                <FloatingActionBars {...this.props}></FloatingActionBars>
          </Container>
        )
    }
}



var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      
     

    },
  
  });