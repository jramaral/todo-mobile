import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  label: {
    color: "#707070",
    fontSize: 16,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    padding: 10,
    width: "95%",
    borderBottomWidth: 1,
    borderBottomColor: "#E5791B",
    marginHorizontal: 10,
  },
  inputArea: {
    fontSize: 16,
    padding: 10,
    width: "95%",
    borderWidth: 1,
    borderColor: "#E5791B",
    marginHorizontal: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: "top",
  },
  inLine: {
    width: "95%",
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputInLine: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  textConcluir: {
    fontWeight: "bold",
    color: "#E5791B",
    textTransform: "uppercase",
    fontSize: 16,
  },
  textExcluir: {
    fontWeight: "bold",
    color: "#20295F",
    textTransform: "uppercase",
    fontSize: 16,
  },
  typeIconInative: {
    opacity: 0.5,
  },
});

export default styles;
