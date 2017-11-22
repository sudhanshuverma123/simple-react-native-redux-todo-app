import {createStore, compose} from 'redux';
import reducers from '../reducers';
import {AsyncStorage} from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist'

export const configureStore = () => {
  var store = createStore(reducers, undefined, compose(
    autoRehydrate()
  ));
  persistStore(store, {storage: AsyncStorage});
  return store;
}
