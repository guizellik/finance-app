import React from 'react';
import Routes from './routes'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

// GlobalStore é o alias ou apelido
import { store as GlobalStore } from './store'

function App() {
  return (
    <Provider store={GlobalStore}>
      <Routes />
      <Toaster />
    </Provider>
  );
}

export default App;
