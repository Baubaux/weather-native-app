import React, { useEffect, useState } from 'react';
import { 
  FlatList, 
  StyleSheet, 
  Text, 
  View } from 'react-native';
import TodayWeather from './components/TodayWeather';
import axios from 'axios';

export default function App() {

  useEffect(() => { 
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely%2Chourly%2Calerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8&fbclid=IwAR03TiFxJLLNZiBoNQwegyiTkexqI7d3KjZHcFGnIUk1xTKk3lKWKzveesw')
    .then(res => {
      console.log(res.data);
    })
  }, [])

  const [today, setToday] = useState([])

  return (
    <View style={styles.container}>
      <Text>Bienvenu sur mon application méteo</Text>
      <TodayWeather></TodayWeather>
      <FlatList
          data={today}
          renderItem={({ item }) => {
            return <TodayWeather item={item}/>
          }}
          keyExtractor={item => item.id.toString()}
      />
    </View>
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
