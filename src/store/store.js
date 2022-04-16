import initialState from "./initialState";
import bookmarksReducer from "./reducers/bookmarksReducer";
import {createStore} from "redux";

const saveToSessionStorage = (state) => {
    try {
        sessionStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
        console.error(e);
    }
};

const loadFromSessionStorage = () => {
    try {
        const stateStr = sessionStorage.getItem('state');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const persistedStore = loadFromSessionStorage() ?? initialState;
const store = createStore(bookmarksReducer, persistedStore);

store.subscribe(() => {
    saveToSessionStorage(store.getState());
});

export default store;