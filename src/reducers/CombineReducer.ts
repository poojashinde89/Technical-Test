import { combineReducers } from "redux";
import insuranceReducer from "./InsuranceReducer";

const rootReducer = combineReducers({
    insuranceList: insuranceReducer,
});

export default rootReducer;