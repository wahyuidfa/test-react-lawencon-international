import axios from "axios";

export const getAllMovie = (page) => {
    return axios.get(
        `https://miniproject-moviereviewapp.herokuapp.com/movies/show/genre?page=${page}&limit=10`
    );
};
