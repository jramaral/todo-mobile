import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

//styles
import styles from "./styles";

//icon
import add from "../../assets/add.png";
import save from "../../assets/confirm.png";

export default function Footer({ icon, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={icon == "add" ? add : save} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>Organizando sua vida</Text>
    </View>
  );
}
