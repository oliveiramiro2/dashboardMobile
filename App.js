import * as React from "react";
import { View, Text } from "react-native";
import { Provider } from 'react-redux'
import { store } from './store/store'

import Dashboard from './components/DashboardCompleto'
import HeaderDashboard from './components/HeaderDashboard'


export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Provider store={store}>
        <HeaderDashboard />
        <Dashboard />
        <Text>Universal React with Expo</Text>
      </Provider>
    </View>
  );
}
