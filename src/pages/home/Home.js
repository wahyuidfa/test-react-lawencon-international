import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import getAllMovieReducers from "../../redux/reducers/getAllMovieReducers";
import { getAllMovieAsync } from "../../redux/actions";
import { Link } from "react-router-dom";

function Home() {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const { movieList, loading } = useSelector((state) => state.getAllMovieReducers);
    // const scrollPosition = useScroll();

    const loadMore = () => {
        setPage(page + 1);
    };
    useEffect(() => {
        dispatch(getAllMovieAsync(page));
    }, [dispatch, page]);

    return (
        <div>
            <div className={styles.divContainer}>
                {loading ? (
                    <div>
                        <img src="" />
                    </div>
                ) : (
                    ""
                )}
                {movieList.map((film) => (
                    <div key={film._id} className={styles.divBox}>
                        <Link to={`/detailed/${film._id}`} style={{ textDecoration: "none" }}>
                            <div className={styles.imgContainer}>
                                <img className={styles.imgPoster} src={film.poster} alt="img" />
                            </div>

                            <div className={styles.movieInfo}>
                                <p className={styles.title}>
                                    {film.title} <br />
                                </p>
                                {film.movie_info.Genre.map((genre) => (
                                    <div key={genre} className={styles.genre}>
                                        {genre},
                                    </div>
                                ))}
                            </div>
                        </Link>
                    </div>
                ))}
                <button onClick={loadMore}>Load More </button>
            </div>
        </div>
    );
}

export default Home;
