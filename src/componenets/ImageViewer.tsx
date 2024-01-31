import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ImageViewer({ props, selectedImage }) {
  const imageSource = selectedImage ? { uri: selectedImage } : props;
  return (
    <View>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
