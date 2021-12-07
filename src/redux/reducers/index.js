import { combineReducers } from "redux";
import getAllMovieReducers from "./getAllMovieReducers";

const rootReducer = combineReducers({
    getAllMovieReducers,
})

export default rootReducer;