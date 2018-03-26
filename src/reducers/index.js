import { combineReducers } from 'redux';
import { createReducer } from './util';
import * as types from '../constants/types';

const initialAgendas = [
	{
		heading: 'Meeting #1',
		timeStart: 2,
		timeFinish: 3,
		agendaItems: [
			{
				title: 'Some agenda item',
				notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				time: 30,
				id: 1,
			},
			{
				title: 'Some agenda item',
				notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				time: 30,
				id: 2,
			},
		],
	},
	{
		heading: 'Meeting #2',
		timeStart: 2,
		timeFinish: 3,
		agendaItems: [
			{
				title: 'Some agenda item',
				notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				time: 30,
				id: 1,
			},
			{
				title: 'Some agenda item',
				notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				time: 30,
				id: 2,
			},
		],
	},
	{
		heading: 'Meeting #3',
		timeStart: 2,
		timeFinish: 3,
		agendaItems: [
			{
				title: 'Some agenda item',
				notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				time: 30,
				id: 1,
			},
			{
				title: 'Some agenda item',
				notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				time: 30,
				id: 2,
			},
		],
	},
];

class Handlers {
	static [types.ADD_AGENDAS] (agendaState, { payload }) {
		console.log(agendaState);
		return {
			...agendaState,
		}
	}
}

const agendasReducer = createReducer(initialAgendas, {
	[types.ADD_AGENDAS]: Handlers[types.ADD_AGENDAS],
});

const appReducer = combineReducers({
	agendas: agendasReducer,
});

export default appReducer;
