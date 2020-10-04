import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import {Provider} from "react-redux";
import AppRouter from './router/AppRouter';

function App() {
  return (
      <Provider store={store}>
          <AppRouter/>
      </Provider>
  );
}

export default App;
