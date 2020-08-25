import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format, isPast } from "date-fns";

//icon
import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

export default function DatePickerJs({ save, dates }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState();
  const [mindate, setMindate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(format(new Date(date), "dd/MM/yyyy"));

    save(format(new Date(date), "yyyy-MM-dd"));
    // console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  useEffect(() => {
    if (dates) {
      setDate(format(new Date(dates), "dd/MM/yyyy"));
    }
  });

  return (
    <>
      <Text style={styles.label}>Data</Text>
      <View style={styles.toolText}>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={styles.text}>{date}</Text>
          <Image source={iconCalendar} style={styles.iconTextInput} />
        </TouchableOpacity>

        {/* <Button title="Show Date Picker"  /> */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          minimumDate={mindate}
          headerTextIOS="Selecione uma data"
          confirmTextIOS="Confirme"
          cancelTextIOS="Cancelar"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    borderRadius: 5,

    // Set border width.
    borderWidth: 1,

    // Set border Hex Color Code Here.
    borderColor: "#FF5722",

    // Setting up Text Font Color.
    color: "#000",

    // Setting Up Background Color of Text component.
    // backgroundColor: "#CDDC39",

    // Adding padding on Text component.
    padding: 2,

    fontSize: 20,

    textAlign: "center",
    height: 40,
    margin: 10,
    alignItems: "center",
  },
  iconTextInput: {
    position: "absolute",
    left: "90%",
    top: 15,
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 10,
  },
  toolText: {
    //  marginVertical: 20,
  },
  label: {
    color: "#707070",
    fontSize: 16,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 0,
  },
});
