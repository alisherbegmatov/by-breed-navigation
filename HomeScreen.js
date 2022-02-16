import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { cats, dogs } from "./breeds";
import Cell from "./Cell";

function HomeScreen({ navigation }) {
  const [breeds, setBreeds] = useState(cats);
  return (
    <View style={styles.view}>
      <FlatList
        style={styles.list}
        data={breeds}
        renderItem={({ item, index }) => {
          return (
            <Cell
              title={item.breed}
              showDetails={() => navigation.navigate("Details", { item })}
            />
          );
        }}
        keyExtractor={(item) => item.breed}
      />
      <View style={styles.buttons}>
        <Button
          onPress={() => setBreeds(cats)}
          title="Cats"
          color={"#AD8D6C"}
        />
        <Button
          onPress={() => setBreeds(dogs)}
          title="Dogs"
          color={"#AD8D6C"}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  buttons: {
    width: "100%",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  list: {
    flex: 1,
    width: "100%",
  },
});
export default HomeScreen;
