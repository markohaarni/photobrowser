import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import PhotoGrid from './components/PhotoGrid';
import ImgDetail from './components/ImgDetail';

const AppNavigator = createStackNavigator(
  {
    Home: PhotoGrid,
    Details: ImgDetail
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
