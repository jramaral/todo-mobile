import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  filter: {
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-around",
    height: 70,
    alignItems: "center",
  },
  filterTextActived: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#E5791B",
  },
  filterTextInative: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#20295F",
    opacity: 0.5,
  },
  content: {
    marginTop: 30,
    width: "97%",
  },
  title: {
    width: "95%",
    borderBottomWidth: 1,
    borderColor: "#20295F",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  titleText: {
    color: "#20295F",
    fontWeight: "bold",
    position: "relative",
    top: 10,
    backgroundColor: "#FFF",
    fontSize: 15,
    paddingHorizontal: 10,
  },
});

export default styles;
