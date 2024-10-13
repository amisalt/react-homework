import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { ActivityIndicator, Button, ImageBackground, ProgressBar, ScrollView, Switch, TextInput, TouchableWithoutFeedback, FlatList, SectionList } from 'react-native-web';
import { useState, useRef, useEffect } from 'react';
import { TouchableHighlight } from 'react-native';
import { Navigate } from './Navigate';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Navigate/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});