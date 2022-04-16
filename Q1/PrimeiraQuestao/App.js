import React, {useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import CountButton from "./CountButton";

export default function App(){
  const[count, setCount] = useState(0);
  const increment1 = () => setCount(count => count + 1)

  return(
    <View style={styles.container}>
      <Text>You've pressed the button: {count} time(s)</Text>
      <CountButton title={'CLICK ME'} onPress={increment1}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});