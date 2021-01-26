import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import TodayWeather from './components/TodayWeather';
import OtherDayWeather from './components/OtherDayWeather';
import axios from 'axios';

export default function App() {

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
    .then(res => {
      setData(res.data.current)
      console.log(res.data.current)
      console.log(res.data.current.temp)
    })
  }, [])

  const [Data, setData] = useState([])

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {/* {data.temp} */}
        <TodayWeather>
          {/* {data.temp}°C */}
        </TodayWeather>
        <OtherDayWeather></OtherDayWeather>
        <OtherDayWeather></OtherDayWeather>
        <OtherDayWeather></OtherDayWeather>
        <OtherDayWeather></OtherDayWeather>
        <OtherDayWeather></OtherDayWeather>
        <OtherDayWeather></OtherDayWeather>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
