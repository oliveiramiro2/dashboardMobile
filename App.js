import * as React from "react";
import { View, Text } from "react-native";
import { Provider } from 'react-redux'
import { store } from './store/store'

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
        <Text>Universal React with Expo</Text>
      </Provider>
    </View>
  );
}
