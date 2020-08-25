import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    width: "95%",
    height: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  typeOfActivity: {
    width: 50,
    height: 50,
  },
  cardTitle: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  cardRight: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  cardDate: {
    color: "#E5791B",
    fontWeight: "bold",
  },
  cardHour: {
    color: "#707070",
  },
  cardDone: {
    opacity: 0.5,
  },
});

export default styles;
