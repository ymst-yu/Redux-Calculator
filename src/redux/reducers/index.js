import { combineReducers } from "redux";
import { calculator } from "./calculator";

const reducers = combineReducers({ calculator }); // 複数のreducerをまとめる。（※このケースでは reducer は1つ(calculatorのみ）なので、本来まとめる必要はない。）

export default reducers;
