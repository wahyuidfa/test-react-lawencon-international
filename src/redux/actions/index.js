import { getAllMovie } from "../../services";

export const getAllMovieAsync = (page) => {
    return (dispatch) => {
        dispatch({type: "getallmovie/get-start"})
        getAllMovie(page)
        .then((response) => {
            dispatch(getAllMovieSuccess(response.data.data.docs))
        })
        .catch((error) => {
            dispatch(getAllMovieFailed(error))
        })
    }
}

export const getAllMovieSuccess = (getAllMovie) => ({
    type: "getallmovie/get-success",
    payload: {
        getAllMovie,
    }
})

export const getAllMovieFailed = (error) => ({
    type: "getallmovie/get-failed",
    payload: {
        error
    }
})