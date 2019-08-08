import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

interface ThumbnailProps {
  uri: string;
  onPress: any;
}

export default function Thumbnail(props: ThumbnailProps) {
  const width = require('Dimensions').get('window').width / 3.3;
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image
        style={{
          width,
          height: width,
          maxWidth: 150,
          maxHeight: 150
        }}
        source={{
          uri: props.uri
        }}
        
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5
  }
});

