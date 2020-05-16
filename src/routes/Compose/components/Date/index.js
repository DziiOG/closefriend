import React, {useState, Fragment} from 'react';
import {View,  Platform, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, Left, Right, Icon, Button } from 'native-base';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput } from 'react-native-paper';
import { ProductConsumer } from '../../../../context';


const DateFromTime = ({getUserComposedData, composedData, navigation}) => {
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
    <View keyboardShouldPersistTaps="always">
        <View keyboardShouldPersistTaps="always">
        <ProductConsumer keyboardShouldPersistTaps="always">
          {
            value => (
                <Fragment>

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
            <View style={{margin: 10, flexDirection: 'row', alignItems: 'center'}}  >
                <Left style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                    <Icon name="ios-paper" size={30} color="#fff" style={{color: '#fff'}}></Icon>
                    <Text style={{paddingHorizontal: 15, fontSize: 18,  color: '#fff'}}>Title</Text>
                </Left>

              <TextInput  mode="flat" dense={true} style={{backgroundColor: 'transparent', width: 189, height: 22}} value={value.titleCompose} onChangeText={(text)=> {value.textHandler(text, "title")}}></TextInput>
            </View>
            <View style={{margin: 10, flexDirection: 'column', alignItems: 'center'}} >
                <Left style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                    <Icon name="ios-list" size={30} color="#fff" style={{color: '#fff'}}></Icon>
                    <Text style={{paddingHorizontal: 15, fontSize: 18,  color: '#fff'}}>Task</Text>
                </Left>

              <TextInput  mode="flat" dense={true} style={{backgroundColor: 'transparent', width: 270, height: 52}} value={value.taskCompose} onChangeText={(text)=> {value.textHandler(text, "task")}}></TextInput>
            </View>
                </Fragment>
            )
          }
        </ProductConsumer>


<View style={{flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center',}}
                    keyboardShouldPersistTaps="always"
                    >
              <ProductConsumer keyboardShouldPersistTaps="always">
                {
                  value => (
                    <View keyboardShouldPersistTaps="always">

                      <Button title="Compose" submit style={{
                                      margin: 10, 
                                  flexDirection: 'row', 
                                  alignItems: 'center', 
                                  backgroundColor: '#ff0000', 
                                  width: 270, 
                                  height: 42, 
                                  flex: 1, 
                                  justifyContent: 'center', 
                                  alignItems: 'center',
                                  borderRadius: 15
                      }} 
                      keyboardShouldPersistTaps="always"
                      onPressIn={()=>{

                        if(value.taskCompose && value.titleCompose){

                        getUserComposedData({
                                  title: value.titleCompose,
                                  task: value.taskCompose,
                                  time: date,
                                  dateM: date
                      }); 

                      alert("Your task has been added successfully")


                        }else {
                          alert("Please make sure Title and Task are not empty")
                        }
                      
                      //console.log(composedData)
                       

                      }}
                      onPressOut={()=>{
                        if(value.taskCompose && value.titleCompose){

                        value.returnToDefault();
                        navigation.navigate('Alarm');
                        }
                      }}
                       >
                          <Text style={{color: '#fff'}}>Compose</Text>
                      </Button>
                    </View>
                  )
                }
              </ProductConsumer>
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