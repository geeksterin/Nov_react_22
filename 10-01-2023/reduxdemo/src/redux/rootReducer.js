import { combineReducers } from 'redux';
import BallReducer from './ballReducer';
import BatReducer from './batReducer';

const rootReducer = combineReducers({
    ball: BallReducer,
    bat:BatReducer
})

export default rootReducer