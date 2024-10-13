import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { ActivityIndicator, Button, ImageBackground, ProgressBar, ScrollView, Switch, TextInput, TouchableWithoutFeedback, FlatList, SectionList } from 'react-native-web';
import { useState, useRef, useEffect } from 'react';
import { TouchableHighlight } from 'react-native';
import { Provider } from 'react-redux';
import axios from 'axios';
import { WeatherIcon } from './WeatherIcon';
import { store } from './store';
import { WeatherDesc } from './WeatherDesc';
import { WeatherSearch } from './WeatherSearch';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <WeatherIcon/>
        <WeatherDesc/>
        <WeatherSearch/>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fced9',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10
  }
});