import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface ImgDetailProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class ImgDetail extends Component<ImgDetailProps> {
  static navigationOptions = {
    title: 'Detail'
  };

  render() {
    const { navigation } = this.props;
    const imgUri: string = navigation.getParam('imgUri', 'No image');
    const imgTitle: string = navigation.getParam('title', 'Image title');
    const width = require('Dimensions').get('window').width - 10;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{imgTitle}</Text>
        <Image
          style={{
            width: width,
            height: width,
            maxWidth: 600,
            maxHeight: 600
          }}
          source={{
            uri: imgUri
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingTop: 20
  },
  title: {
    marginBottom: 10
  }
});
