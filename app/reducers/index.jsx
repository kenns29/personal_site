import {combineReducers} from 'redux';
import main from './main';
import ui from './ui';
const allReducers = combineReducers({main,ui});
export default allReducers;
