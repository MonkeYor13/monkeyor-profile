import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { MyTabs } from "../imports/imports"


export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MyTabs} />
    </Stack.Navigator>
  );
}
