import logo from './logo.svg';
import './App.css';
import Ball from './Components/Ball';
import { Provider } from 'react-redux';
import store from './redux/store'
import Bat from './Components/Bat';
function App() {
  return (
    <Provider store={store}>
      <Ball />
      <Bat/>
    </Provider>
  );
}

export default App;
