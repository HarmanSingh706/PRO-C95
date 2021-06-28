import React, { Component } from 'react'
import { StyleSheet,Image } from 'react-native'
import LoginRegistration from './screens/LoginRegistration'
import HomePageScreen from './screens/HomePageScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WhatIsMunScreen from './screens/WhatIsMunScreen';
import Conferences from './screens/ConferencesScreen'
export default class App extends Component{
 render(){
  return(
 <AppContainer/>
  )
}
}

const TabNavigator = createBottomTabNavigator({
  HomePage: HomePageScreen,
  WhatIsMun: WhatIsMunScreen,
  Conferences: Conferences
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "HomePage"){
        return(
          <Image
          source={require("./assets/HomePage.png")}
          style={{width:40, height:40}}
        />
        )

      }
      else if(routeName === "WhatIsMun"){
        return(
          <Image
          source={require("./assets/favicon.png")}
          style={{width:40, height:40}}
        />)

      }
      else if (routeName ==="Conferences"){
        return(
          <Image
          source={(require('./assets/adaptive-icon.png'))}
          style={{width:40, height:40}}
          />)
        
      }
    }
  })
})

const SwitchNavigator = createSwitchNavigator({
  LoginRegistration : LoginRegistration,
  TabNavigator : TabNavigator
})

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});