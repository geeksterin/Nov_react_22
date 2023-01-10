import { createStore } from 'redux';
import BallReducer from "./ballReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(BallReducer, composeWithDevTools());

export default store