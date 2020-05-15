import React, {useState} from 'react';
import {View, Button, Platform, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, Left, Right, Icon } from 'native-base';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput } from 'react-native-paper';


const DateFromTime = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);



  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
    

     <View>
        <TouchableOpacity style={{margin: 10, flexDirection: 'row', alignItems: 'center'}} onPress={showDatepicker} >
            <Left style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                <Icon1 name="clock-outline" size={30} color="#fff"></Icon1>
                <Text style={{paddingHorizontal: 15, fontSize: 18,  color: '#fff'}}>Date</Text>
            </Left>

            <Text style={{textDecorationLine: 'underline', textDecorationColor: '#fff', color: '#fff', marginRight: 40}}>{"       "} {date.toLocaleDateString()}{"       "} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{margin: 10, flexDirection: 'row', alignItems: 'center'}} onPress={showTimepicker} >
            <Left style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                <Icon1 name="clock-outline" size={30} color="#fff"></Icon1>
                <Text style={{paddingHorizontal: 15, fontSize: 18,  color: '#fff'}}>Time</Text>
            </Left>

            <Text style={{textDecorationLine: 'underline', textDecorationColor: '#fff', color: '#fff', marginRight: 40}}>{"       "} {date.toLocaleTimeString()}{"       "} </Text>
        </TouchableOpacity>
        <View style={{margin: 10, flexDirection: 'row', alignItems: 'center'}} onPress={showDatepicker} >
            <Left style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                <Icon name="ios-paper" size={30} color="#fff" style={{color: '#fff'}}></Icon>
                <Text style={{paddingHorizontal: 15, fontSize: 18,  color: '#fff'}}>Title</Text>
            </Left>

           <TextInput  mode="flat" dense={true} style={{backgroundColor: 'transparent', width: 189, height: 22}}></TextInput>
        </View>
        <View style={{margin: 10, flexDirection: 'column', alignItems: 'center'}} onPress={showDatepicker} >
            <Left style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                <Icon name="ios-list" size={30} color="#fff" style={{color: '#fff'}}></Icon>
                <Text style={{paddingHorizontal: 15, fontSize: 18,  color: '#fff'}}>Task</Text>
            </Left>

           <TextInput  mode="flat" dense={true} style={{backgroundColor: 'transparent', width: 270, height: 41}}></TextInput>
        </View>

<View style={{flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center',}}>

        <TouchableOpacity style={{
                        margin: 10, 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    backgroundColor: '#ff0000', 
                    width: 270, 
                    height: 30, 
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    borderRadius: 15
        }} onPress={showTimepicker} >
            <Text style={{color: '#fff'}}>Compose</Text>
        </TouchableOpacity>
</View>
        
       
     </View>


      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}


<Text>

     {
         date.toLocaleString()[2]
     }
</Text>
    </View>
  );
};

export default DateFromTime;