import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import StatReducer from "../reducer";

export const store = createStore(StatReducer, devToolsEnhancer());
