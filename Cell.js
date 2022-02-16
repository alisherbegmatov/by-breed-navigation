import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

function Cell({ title, showDetails }) {
  return (
    <TouchableHighlight
      style={styles.TouchableHighlight}
      onPress={() => showDetails()}
      underlayColor="#AD8D6C"
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  TouchableHighlight: {
    padding: 20,
  },

  text: {
    fontSize: 20,
    fontFamily: "Futura",
    color: "#AD8D6C",
  },
});

export default Cell;
