const initialstate = {
    movieList: [],
    totalPage: null,
    currentPage: null,
    nextPage: null,
    loading: false,
    error: "",
};

function getAllMovieReducers(state = initialstate, action) {
    const { type, payload } = action;
    switch (type) {
        case "getallmovie/get-start":
            return {
                ...state,
                laoding: true,
            };
        case "getallmovie/get-success":
            return {
                ...state,
                movieList: payload.getAllMovie,
            };
        case "getallmovie/get-failed":
            return {
                ...state,
                error: payload.error,
            };
        default:
            return state;
    }
}
 export default getAllMovieReducers;