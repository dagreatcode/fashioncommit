import {configureStore, applyMiddleware, compose } from "redux";
import rootReducer from "../redux/index";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENION_COMPOSE__ || compose;

const store = configureStore(rootReducer, storeEnhancers(applyMiddleware(thunk)));

export default store;