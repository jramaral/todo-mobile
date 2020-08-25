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
// import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

export default function TimePickerJs({ save, hour }) {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [time, setTime] = useState();

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (value) => {
    setTime(format(new Date(value), "HH:mm"));
    save(format(new Date(value), "HH:mm"));

    //  console.warn("The time has been picked: ", value);
    hideTimePicker();
  };

  useEffect(() => {
    if (hour) setTime(hour);
  });

  return (
    <>
      <Text style={styles.label}>Horas</Text>
      <View style={styles.toolText}>
        <TouchableOpacity onPress={showTimePicker}>
          <Text style={styles.text}>{time}</Text>
          <Image source={iconClock} style={styles.iconTextInput} />
        </TouchableOpacity>

        {/* <Button title="Show Date Picker"  /> */}
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          is24Hour={true}
          headerTextIOS="Selecione uma hora"
          confirmTextIOS="Confirme"
          cancelTextIOS="Cancelar"
          onConfirm={handleConfirm}
          onCancel={hideTimePicker}
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
    //backgroundColor: "#CDDC39",

    // Adding padding on Text component.
    padding: 2,

    fontSize: 20,

    textAlign: "center",
    height: 35,
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
    //marginVertical: 10,
  },
  label: {
    color: "#707070",
    fontSize: 16,
    paddingHorizontal: 10,
    // marginTop: 20,
    marginBottom: 0,
  },
});
