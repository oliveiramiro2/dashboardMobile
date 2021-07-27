import React from "react";
import { Text, Image, SafeAreaView, ScrollView } from "react-native";
import { Provider } from 'react-redux'
import { store } from './store/store'

import Dashboard from './components/DashboardCompleto'
import HeaderDashboard from './components/HeaderDashboard'
import styleHome from "./estilos/styleHome";

export default function App() {

  return (
      <SafeAreaView style={styleHome.container}>
        <Provider store={store}>
          <Image 
            source={require('./assets/graficoCrescente.jpg')}
            style={styleHome.image}
          />
          <ScrollView>
            <HeaderDashboard />
            <Dashboard />
          </ScrollView>
          <Text>App React Native by Ramiro</Text>
        </Provider>
      </SafeAreaView>
  );
}
