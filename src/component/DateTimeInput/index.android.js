import React, { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format, isPast } from "date-fns";
import {
  TouchableOpacity,
  Image,
  Text,
  Platform,
  Button,
  View,
  Alert,
} from "react-native";

//Stilos
//import styles from "./styles";

//icon
import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

import Header from "./../Header/index";

export default function DateTimeInputAndroid({ type }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(!show);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode(type);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const formatDate = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} `;
};
