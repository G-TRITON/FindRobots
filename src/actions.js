import { CHANGE_SEARCH_FIELD, 
	RequestRobos_pending,
	RequestRobos_success,
	RequestRobos_failed } from './constants.js';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const RequestRobots = () => (dispatch) => {
	dispatch({
		type: RequestRobos_pending
	});
	fetch('https://jsonplaceholder.typicode.com/users')
  			.then(response => response.json())
  			.then(data => dispatch({type: RequestRobos_success, payload: data}))
  			.catch(err => dispatch({type: RequestRobos_failed, payload: err}));
		
}