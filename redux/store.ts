import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer from './reducers';
import { fetchPhotosEpic } from './epic';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    reducer,
    applyMiddleware(epicMiddleware)
  );

  epicMiddleware.run(fetchPhotosEpic);

  return store;
}