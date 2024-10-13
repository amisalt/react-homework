import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { ActivityIndicator, Button, ImageBackground, ProgressBar, ScrollView, Switch, TextInput, TouchableWithoutFeedback, FlatList, SectionList } from 'react-native-web';
import { useState, useRef, useEffect } from 'react';
import { TouchableHighlight } from 'react-native';
import { Navigate } from './NavigationContainer';
import { Provider } from 'react-redux';
import { store } from './store';
export default function App() {
  return (
    <Provider store={store}>
      <Navigate/>
    </Provider>
  )
}
