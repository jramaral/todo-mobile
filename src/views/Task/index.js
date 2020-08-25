import React, { useState, useEffect } from "react";
import * as Network from "expo-network";
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Switch,
  Button,
  Alert,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";

//componentes
import Header from "../../component/Header";
import Footer from "./../../component/Footer";

//api
import api from "../../sevices/api";

//icon

import typeIcons from "./../../util/TypeIcons";
//import DateTimeInput from "./../../component/DateTimeInput/index.android";
import DateTimeInput from "./../../component/DateTimeInput/DatePickerJs";
import TimeInput from "./../../component/DateTimeInput/TimePickerJs";

import { format, isPast } from "date-fns";

export default function Task({ navigation }) {
  // const { mac } = navigation.state.params;
  //const { otherParam } = route.params;
  //console.warn("route: ", mac);
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [type, setType] = useState(1);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [when, setWhen] = useState();
  const [macaddress, setMacaddress] = useState();
  const [load, setLoad] = useState(true);

  const New = async () => {
    if (!title) {
      Alert.alert("ATENÇÃO", "Defina o Título da Tarefa");
      return;
    }
    if (!description) {
      Alert.alert("ATENÇÃO", "Defina os Detalhes para Tarefa");
      return;
    }
    if (!date) {
      Alert.alert("ATENÇÃO", "Data e Hora para Tarefa");
      return;
    }
    if (!hour) {
      Alert.alert("ATENÇÃO", "Hora para Tarefa");
      return;
    }

    if (id) {
      //console.warn("atualizando: ", macaddress);
      await api
        .put(`/task/${id}`, {
          macaddress,
          type,
          title,
          description,
          when: when,
          done,
          done,
        })
        .then(() => {
          Alert.alert("Mensagem", "Tarefa gravada!");
          navigation.navigate("Home");
        });

      // Alert.alert("Mensagem", "Tarefa gravada!");
      // navigation.navigate("Home");
    } else {
      //console.warn("novo registro: ", navigation.state.params.mac);
      setMacaddress(navigation.state.params.mac);
      //console.warn("mac: ", macaddress);
      await api
        .post("/task", {
          macaddress,
          type,
          title,
          description,
          when: when,
          done,
        })
        .then(() => {
          Alert.alert("Mensagem", "Tarefa gravada!");
          navigation.navigate("Home");
        });
    }
  };

  async function LoadTask() {
    try {
      const r = await api.get(`/task/${id}`);
      //   console.warn(r);
      setLoad(true);
      setMacaddress(r.data.macaddress);
      setType(r.data.type);
      setTitle(r.data.title);
      setDescription(r.data.description);
      setDate(format(new Date(r.data.when), "yyyy-MM-dd"));
      setHour(format(new Date(r.data.when), "HH:mm"));
      setDone(r.data.done);
      setLoad(false);
    } catch (error) {
      // console.warn(error);
    }
  }

  function getMacAddress() {
    setMacaddress(navigation.state.params.mac);
    setLoad(false);
  }
  async function deleteTask() {
    await api.delete(`/task/${id}`).then(() => navigation.navigate("Home"));
  }

  async function remove() {
    Alert.alert(
      "Remover Tarefa",
      "Deseja realmente remover esta tarefa?",
      [
        { text: "Cancelar" },
        { text: "Confirmar", onPress: () => deleteTask() },
      ],
      { cancelable: true }
    );
  }

  useEffect(() => {
    if (Boolean(navigation.state.params.idTask)) {
      setId(navigation.state.params.idTask);
      LoadTask();
    }

    if (navigation.state.params.mac) {
      getMacAddress();
    }

    if (date && hour) {
      setWhen(`${date}T${hour}:00.000`);
    }
  }, [hour, date, id]);

  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Header showBack={true} navigation={navigation} />
      {load ? (
        <ActivityIndicator color="#E5791B" size={50} />
      ) : (
        <ScrollView style={{ width: "100%" }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: 10 }}
          >
            {typeIcons.map(
              (icon, index) =>
                index > 0 && (
                  <TouchableOpacity key={index} onPress={() => setType(index)}>
                    <Image
                      source={icon}
                      style={[
                        styles.imageIcon,
                        type && type !== index && styles.typeIconInative,
                      ]}
                    />
                  </TouchableOpacity>
                )
            )}
          </ScrollView>

          <Text style={styles.label}>Título</Text>
          <TextInput
            style={styles.input}
            maxLength={30}
            placeholder="Lembre-me de fazer..."
            onChangeText={(text) => setTitle(text)}
            value={title}
          />
          <Text style={styles.label}>Detalhes</Text>
          <TextInput
            style={styles.inputArea}
            maxLength={100}
            multiline={true}
            placeholder="O que fazer ?..."
            onChangeText={(text) => setDescription(text)}
            value={description}
          />

          {/* <DateTimeInput type={"date"} /> */}
          <DateTimeInput save={setDate} dates={date} />
          <TimeInput save={setHour} hour={hour} />

          {id && (
            <View style={styles.inLine}>
              <View style={styles.inputInLine}>
                <Switch
                  onValueChange={() => setDone(!done)}
                  value={done}
                  thumbColor={done ? "#00761b" : "#EE6b26"}
                />
                <TouchableOpacity>
                  <Text style={styles.textConcluir}>Concluído</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={remove}>
                <Text style={styles.textExcluir}>EXCLUIR</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* <Button title="click me" onPress={teste} /> */}
        </ScrollView>
      )}
      <Footer icon={"save"} onPress={New} />
    </KeyboardAvoidingView>
  );
}
