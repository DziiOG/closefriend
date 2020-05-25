import React, {useEffect, useState} from 'react';
import io from 'socket.io-client'
import { Text, View } from 'native-base';
let socket;

const ChatComponent = ({name, chatroomId}) => {
    {/**
    
        const [profileName, setProfileName] = useState('');
        const [room, setRoom] = useState('');
        const ENDPOINT = 'https://172.20.10.2:5000'
        useEffect(()=> {
            
            socket = io(ENDPOINT);
    
            setProfileName(name);
    
            setRoom(chatroomId);
    
            console.log(socket);
    
    
            socket.emit('join', {profileName, room}, ({error})=>{
                alert(error);
            });
    
        }, [ENDPOINT, name, chatroomId]);
    */}




    return (
        <View>
            <Text>This is the Chat ChatComponent</Text>
        </View>
    )
}

export default ChatComponent