import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 65,
    backgroundColor: "#20295F",
    borderTopWidth: 5,
    borderTopColor: "#E5791B",

    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
  button: {
    position: "relative",
    top: -20,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    color: "#FFF",
    top: -15,
  },
});

export default styles;
