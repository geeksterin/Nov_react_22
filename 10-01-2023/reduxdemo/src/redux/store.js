import { createStore } from 'redux';
import BallReducer from "./ballReducer";
import BatReducer from './batReducer';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(rootReducer, composeWithDevTools());

export default store