import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

//icones
import ico from "../../assets/default.png";
import * as formatterHelper from "../../Helpers/Formatters";
import typeIcons from "./../../util/TypeIcons";

export default function TaskCard({ card, onPress }) {
  const { title, done, type, when } = card;

  return (
    <TouchableOpacity
      style={[styles.card, done && styles.cardDone]}
      onPress={onPress}
    >
      <View style={styles.cardLeft}>
        <Image source={typeIcons[type]} style={styles.typeOfActivity} />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.cardDate}>{formatterHelper.formatDate(when)}</Text>
        <Text style={styles.cardHour}>{formatterHelper.formatHora(when)}</Text>
      </View>
    </TouchableOpacity>
  );
}
