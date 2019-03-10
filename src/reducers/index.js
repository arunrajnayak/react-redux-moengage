import { combineReducers } from "redux";
import campaigns from "./campaigns";
import logs from "./looger";

export default combineReducers({
  campaigns,
  logs
});
