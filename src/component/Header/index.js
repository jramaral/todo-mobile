import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

//icones
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";
import qr from "../../assets/qrcode.png";
import back from "../../assets/back.png";

export default function Header({
  showNotification,
  showBack,
  pressNotification,
  late,
  navigation,
}) {
  function toBack() {
    navigation.navigate("Home");
  }

  function OpenQrCode() {
    navigation.navigate("QrCode");
  }
  return (
    <View style={styles.header}>
      {showBack ? (
        <TouchableOpacity style={styles.icoleft} onPress={toBack}>
          <Image source={back} style={styles.imgIcoLeft} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.icoleft} onPress={OpenQrCode}>
          <Image source={qr} />
        </TouchableOpacity>
      )}
      <Image source={logo} style={styles.logo} />

      {showNotification && late > 0 && (
        <TouchableOpacity
          style={styles.notification}
          onPress={pressNotification}
        >
          <Image source={bell} style={styles.notificationImage} />
          <View style={styles.circle}>
            <Text style={styles.notificationText}>{late}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
