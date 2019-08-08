import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { NavigationScreenProp, NavigationScreenOption } from 'react-navigation';
import Thumbnail from './Thumbnail';
import { connect } from 'react-redux';
import { fetchPhotos } from '../redux/actions';
import { Dispatch } from 'redux';
import { PhotosState } from '../interfaces';

interface PhotoGridProps {
  navigation: NavigationScreenProp<any, any>;
  photos: PhotosState;
  fetchPhotos: any;
}

class PhotoGrid extends Component<PhotoGridProps> {
  static navigationOptions: NavigationScreenOption<{}> = {
    title: 'Photo browser'
  };

  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    const { photos } = this.props;
    const { data, isFetching, error } = photos;
    const { container, list, infoText, errorText } = styles;

    if (isFetching) {
      return <Text style={infoText}>Loading photos...</Text>;
    } 

    if (error) {
      return (
        <Text style={{ ...infoText, ...errorText }}>
          Error loading photos
        </Text>
      );
    }

    return (
      <View style={container}>
        <FlatList
          style={list}
          data={data}
          renderItem={({ item }) => (
            <Thumbnail
              uri={item.thumbnailUrl}
              onPress={() => {
                this.props.navigation.navigate('Details', {
                  imgUri: item.url,
                  title: item.title
                });
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  list: {
    flex: 1
  },
  infoText: {
    paddingTop: 30,
    textAlign: 'center',
    fontSize: 18
  },
  errorText: {
    color: 'red'
  }
});

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchPhotos: () => dispatch(fetchPhotos())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid)
