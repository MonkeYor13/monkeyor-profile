
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { HomeScreen } from "../imports/imports"


export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='MyHome' component={HomeScreen} />
    </Tab.Navigator>
  )
}