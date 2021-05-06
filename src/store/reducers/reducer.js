import { combineReducers } from 'redux';
import {logger} from './logger';
import { board } from "./board";
import { bidder } from "./bidders";
export const reducer = combineReducers({logger,board,bidder})
