import logo from './logo.svg';
import './App.css';
import Ball from './Components/Ball';
import { Provider } from 'react-redux';
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <Ball />
    </Provider>
  );
}

export default App;
