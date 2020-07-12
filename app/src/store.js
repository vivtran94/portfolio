import { createStore } from "redux";

const initialState = {
	projects: "",
};

const reducer = (currentState, action) => {
	switch (action.type) {
		case "STORE_USERNAME_INPUT":
			return {
				...currentState,
				usernameInput: action.payload,
			};
	}
	return currentState;
};

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;
