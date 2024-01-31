import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, useState } from "react";
type props = {
  onSelect: any;
  onCloseModal: () => void;
};

const EmojiList: FC<props> = ({ onSelect, onCloseModal }) => {
  const [emoji] = useState([
    require("../assets/emoji/emoji1.png"),
    require("../assets/emoji/emoji2.png"),
    require("../assets/emoji/emoji3.png"),
    require("../assets/emoji/emoji4.png"),
  ]);
  return (
    <FlatList
      data={emoji}
      horizontal={true}
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

export default EmojiList;
