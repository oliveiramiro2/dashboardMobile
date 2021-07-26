import * as React from "react";
import { View, Text } from "react-native";
import { Provider } from 'react-redux'
import { store } from './store/store'

import Dashboard from './components/DashboardCompleto'
import HeaderDashboard from './components/HeaderDashboard'
import styleHome from "./estilos/styleHome";

export default function App() {
  return (
    <View
      style={styleHome.container}
    >
      <Provider store={store}>
        <HeaderDashboard />
        <Dashboard />
        <Text>Universal React with Expo</Text>
      </Provider>
    </View>
  );
}
