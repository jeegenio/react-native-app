import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  let [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => setCounter((prevCounter) => prevCounter + 1)}
      />
      <Button
        title="Decrease"
        onPress={() => setCounter((prevCounter) => prevCounter - 1)}
      />
      <Text>Current Counts: {counter}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default CounterScreen;
