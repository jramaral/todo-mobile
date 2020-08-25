import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    paddingTop: 5,
    width: "100%",
    height: 70,
    backgroundColor: "#20295F",
    borderBottomWidth: 5,
    borderBottomColor: "#ee6b26",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 30,
  },
  notification: {
    position: "absolute",
    right: 20,
  },
  notificationImage: {
    width: 20,
    height: 25,
  },
  notificationText: {
    color: "#ee6b26",
    fontWeight: "bold",
    alignItems: "center",
  },
  circle: {
    height: 20,
    width: 20,
    backgroundColor: "#FFF",
    borderRadius: 50,
    alignItems: "center",
    position: "absolute",
    left: 10,
    bottom: 13,
  },
  icoleft: {
    position: "absolute",
    left: 20,
  },
  imgIcoLeft: {
    width: 25,
    height: 15,
  },
});

export default styles;
