import { applyMiddleware, legacy_createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension"
import reducer from "../reducers";
import saga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga);

export default store;
