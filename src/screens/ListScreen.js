import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 20 },
    { name: 'Friend #3', age: 20 },
    { name: 'Friend #4', age: 20 },
    { name: 'Friend #5', age: 20 },
    { name: 'Friend #6', age: 20 },
    { name: 'Friend #7', age: 20 },
    { name: 'Friend #8', age: 20 },
  ];
  const styles = StyleSheet.create({
    textStyle: {
      marginVertical: 30,
    },
  });
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};
export default ListScreen;
