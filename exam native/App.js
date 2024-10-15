import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { ActivityIndicator, Button, ImageBackground, ProgressBar, ScrollView, Switch, TextInput, TouchableWithoutFeedback, FlatList, SectionList } from 'react-native-web';
import { useState, useRef, useEffect } from 'react';
import { TouchableHighlight } from 'react-native';
import { Provider } from 'react-redux';
import axios from 'axios';
import { store } from './store';
import { Navigate } from './Navigate';

export default function App() {
  return (
    <Provider store={store}>
      <Navigate/>
    </Provider>
  )
}