import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Username extends Component {

    componentDidMount(){
    this.props.getUserName(this.props.userId)
    }



    render() {
        return (
            <View>
               
            </View>
        )
    }
}

export default Username
