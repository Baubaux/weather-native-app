import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function OtherDayWeather() {

  return (
    <View style={styles.container}>
        <View style={styles.text}>
            <Text>(icone)</Text>
        </View>
        <View style={styles.image}>
            <Text style={styles.day}>Mardi 26 Janvier 2021</Text>
            <Text style={styles.weather}>Nuageux</Text>
        </View>
        <View style={styles.icon}>
            <Text style={styles.maintemp}>1°C</Text>
            <Text style={styles.mintemp}>0°C</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 300,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },

  text: {
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
  },

  image: {
    marginRight: 2,
    alignContent: 'center',
  },

  icon:{
    marginRight: 2,
  },

  day: {
    fontSize: 15,
  },

  maintemp: {
    fontSize: 15,
  },

  mintemp: {
    fontSize: 10,
  },

  weather: {
    fontSize: 10,
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
