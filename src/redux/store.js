import { createdStore } from "redux";
import rootReducers from "./reducer";

const store = createdStore(rootReducers);

export default store;