import { createStore } from 'redux';
import { reducer } from './reducers/reducer'
export const store = new createStore(reducer)