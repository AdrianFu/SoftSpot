//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('')

  return (
    <SafeAreaView style={styles.container}>

      <View>
        <Text>What do you like to say?</Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={value => setMessage(value.nativeEvent.text)}
        />
        <Text>{'All knowing have to say ... about ' + message}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    marginTop: StatusBar.currentHeight ?? 0
  },
  input: {
    borderWidth: 1,
    height: 40,
  }
});
