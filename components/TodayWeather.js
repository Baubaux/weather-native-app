import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function TodayWeather() {

  return (
    <View style={styles.container}>
        <View style={styles.text}>
            <Text style={styles.day}>Mardi 26 Janvier 2021</Text>
            <Text style={styles.maintemp}>1°C</Text>
            <Text style={styles.mintemp}>0°C</Text>
        </View>
        <View style={styles.image}>
            <Text>(icone)</Text>
            <Text style={styles.weather}>Nuageux</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#1045A0',
    width: 300,
    height: 100,
    justifyContent: 'space-between',
  },

  text: {
    alignContent: 'center',
    marginTop: 2,
    marginLeft: 10,
  },

  image: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    marginRight: 10,
  },

  day: {
      fontSize: 15,
      color: 'white',
  },

  maintemp: {
      fontSize: 25,
      color: 'white',
  },

  mintemp: {
      fontSize: 20,
      color: 'white',
  },

  weather: {
      fontSize: 15,
      color: 'white',
      paddingTop: 2,
  }
});



// import React from 'react';
// import { View, Text } from 'react-native';
// import axios from 'axios';

// const TodayWeather = () => {
//     return (
//         <View>
//             <Text>La météo actuelle :</Text>
//             <Text>La température actuelle est de :</Text>
//         </View>
//     )
// }

// export default TodayWeather
