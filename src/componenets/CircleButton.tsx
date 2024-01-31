import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { MaterialIcons } from "@expo/vector-icons";

type props = {
  onPress: () => void;
};

const CircleButton: FC<props> = ({ onPress }) => {
  return (
    <View style={styles.circleContainer}>
      <TouchableOpacity style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});
export default CircleButton;
