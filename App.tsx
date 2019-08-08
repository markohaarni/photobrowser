import React from 'react';
import { StyleSheet } from 'react-native';
import AppContainer from './AppRouting';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

export default function App() {
  return (
    <Provider store={configureStore()}>
      <AppContainer style={styles.container} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
