import { CHANGE_SEARCH_FIELD, 
	RequestRobos_pending,
	RequestRobos_success,
	RequestRobos_failed } from './constants.js';

const initialstate_search = {
	searchField: ''
}

export const searchRobots = (state=initialstate_search, action={}) => {
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload});
		default: 
			return state;
	}
}

const initialstate_robos = {
	isPending: false,
	robots: [],
	error: ''
}

export const requestRobots = (state=initialstate_robos, action={}) => {
	switch(action.type){
		case RequestRobos_pending:
		return Object.assign({}, state, {isPending: true});
		case RequestRobos_success:
		return Object.assign({}, state, {robots: action.payload, isPending: false});
		case RequestRobos_failed:
		return Object.assign({}, state, {error: action.payload, isPending: false});
		default:
		return state;
	}
}