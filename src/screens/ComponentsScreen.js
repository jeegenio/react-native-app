import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'ryann';

  return (
    <View>
      <Text style={styles.textStyle}>This is the components Screen</Text>
      <Text style={styles.subHeaderStyle}>Subheader</Text>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  subHeaderStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
