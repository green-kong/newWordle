import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';

import rootReducer from '../reducer';
import rootSaga from '../redux';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const sagaMiddleware = createSagaMiddleWare();
const middlewares = [sagaMiddleware];

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

const Store = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Store;
