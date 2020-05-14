import React from 'react';


import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';


import {View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';


import { NavigationContainer } from '@react-navigation/native';






const Drawers = createDrawerNavigator();
//const Tab = createBottomTabNavigator();

















export default function MyDrawer() {
  return (
    <NavigationContainer >
      <Drawers.Navigator  initialRouteName="Home2" drawerContent={(props)=> <CustomDrawerContent {...props}></CustomDrawerContent>}>
        <Drawers.Screen name="Home2" component={MainTabScreen} />
       
      </Drawers.Navigator>
    </NavigationContainer>
  );
}




function CustomDrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);  
      const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
}

  return (
    <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPMPR8kZTIDExkEf15iSImqhGt3R-I6Tp_gwOcQKHkRtIQVI1G&usqp=CAU'
                            }}
                            size={50}
                            >

                            </Avatar.Image>
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style ={styles.title}>Full Name</Title>
                                <Caption>@Username </Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph, styles.caption}>0</Paragraph>
                                <Caption>  Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph, styles.caption}>0</Paragraph>
                                <Caption>  Followers</Caption>
                            </View>  
                        </View>
                    </View> 
                    <Drawer.Section style={styles.drawerContent}>
                        <DrawerItem icon={({size}) => (
                                <Icon
                                    name="home-outline"
                                    color="#DDA0DD"
                                    size={size}
                                    >

                                </Icon>
                                
                                )} 
                                label="Home"
                                
                                onPress={()=> {}}
                                >
                        </DrawerItem>
                        <DrawerItem icon={({color, size}) => (
                                <Icon
                                    name="account-outline"
                                    color="#DDA0DD"
                                    size={size}
                                    >

                                </Icon>
                                )} 
                                label="Measurements"
                                onPress={()=> {}}
                                >
                        </DrawerItem>
                        <DrawerItem icon={({color, size}) => (
                                <Icon
                                    name="bookmark-outline"
                                    color="#DDA0DD"
                                    size={size}
                                    >

                                </Icon>
                                )} 
                                label="Orders"
                                onPress={()=> {}}
                                >
                        </DrawerItem>
                        <DrawerItem icon={({color, size}) => (
                                <Icon
                                    name="settings-outline"
                                    color="#DDA0DD"
                                    size={size}
                                    >

                                </Icon>
                                )} 
                                label="Designs"
                                onPress={()=> {}}
                                >
                        </DrawerItem>
                        <DrawerItem icon={({color, size}) => (
                                <Icon
                                    name="settings-outline"
                                    color="#DDA0DD"
                                    size={size}
                                    >

                                </Icon>
                                )} 
                                label="Settings"
                                onPress={()=> {}}
                                >
                        </DrawerItem>
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                            <TouchableRipple onPress={() => {toggleTheme()}}>
                                <View style={styles.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch value={isDarkTheme}></Switch>
                                    </View>
                                </View>
                            </TouchableRipple>
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem icon={({color, size}) => (
                    <Icon
                    name="exit-to-app"
                    color="#DDA0DD"
                    size={size}
                    >

                    </Icon>
                )} label="Sign Out"
                onPress={()=> {console.log('You pressed me')}}
                >

                </DrawerItem>
            </Drawer.Section>
        </View>
  );
}

/*

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Measurements"
          component={Measurements}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    )
  };

*/







const styles = StyleSheet.create({
  drawerContent: {
      flex: 1,
  },
  userInfoSection: {
      paddingLeft: 20,
  },
  title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
  },
  caption: {
      fontSize: 14,
      lineHeight: 14,
  },
  row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
  },
  section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
  },
  paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
  },
  drawerSection: {
      marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 15,
  }
})