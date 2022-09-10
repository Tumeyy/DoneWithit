import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, SafeAreaView, Button, Alert, Platform, View } from 'react-native';

export default function App() {
  console.log(Dimensions.get('screen'));
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '50%',
        height: 70,
      }}></View>
    </SafeAreaView>
  );
}

const containerStyle = {backgroundColor: "orange"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
