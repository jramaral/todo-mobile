import React, { useState, useEffect } from "react";
import * as Network from "expo-network";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  Alert,
} from "react-native";
import styles from "./styles";

//componentes
import Header from "../../component/Header";
import Footer from "./../../component/Footer";
import TaskCard from "./../../component/TaskCard";

//api
import api from "../../sevices/api";

export default function Home({ navigation }) {
  const [filter, setFilter] = useState("all");

  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(false);
  const [count, setCount] = useState(0);
  const [macaddress, setMacaddress] = useState();

  async function loadTasks() {
    setLoad(true);

    await api.get(`/task/filter/${filter}/${macaddress}`).then((res) => {
      setTasks(res.data);
      setLoad(false);
    });
  }

  async function lateVerify() {
    await api.get(`/task/filter/late/${macaddress}`).then((res) => {
      setCount(res.data.length);
    });
  }

  function notification() {
    setFilter("late");
  }

  function newTask() {
    navigation.navigate("Task", { mac: macaddress });
  }

  function Show(id) {
    navigation.navigate("Task", { idTask: id });
  }
  useEffect(() => {
    const getMacAddress = async () => {
      await Network.getMacAddressAsync().then((mac) => {
        setMacaddress(mac);
        loadTasks();
      });
    };
    getMacAddress();

    lateVerify();
  }, [filter, macaddress]);

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header
        showNotification={true}
        showBack={false}
        pressNotification={notification}
        late={count}
        navigation={navigation}
      />

      <View style={styles.filter}>
        <TouchableOpacity
          onPress={() => {
            setFilter("all");
          }}
        >
          <Text
            style={
              filter === "all"
                ? styles.filterTextActived
                : styles.filterTextInative
            }
          >
            Todos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("today")}>
          <Text
            style={
              filter === "today"
                ? styles.filterTextActived
                : styles.filterTextInative
            }
          >
            Hoje
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("week")}>
          <Text
            style={
              filter === "week"
                ? styles.filterTextActived
                : styles.filterTextInative
            }
          >
            Semana
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("month")}>
          <Text
            style={
              filter === "month"
                ? styles.filterTextActived
                : styles.filterTextInative
            }
          >
            Mês
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("year")}>
          <Text
            style={
              filter === "year"
                ? styles.filterTextActived
                : styles.filterTextInative
            }
          >
            Ano
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          TAREFAS {filter == "late" && "ATRASADAS"}
        </Text>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {load ? (
          <ActivityIndicator color="#E5791B" size={50} />
        ) : (
          tasks.map((t) => (
            <TaskCard
              card={t}
              done={t.done}
              title={t.title}
              key={t._id}
              onPress={() => Show(t._id)}
            />
          ))
        )}
      </ScrollView>
      <Footer icon={"add"} onPress={newTask} />
    </View>
  );
}
