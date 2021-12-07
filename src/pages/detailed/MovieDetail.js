import React from "react";
import styles from "./MovieDetail.module.css";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Box} from "@mui/material";

function MovieDetail() {
    let { id } = useParams();
    let [film, setFilm] = useState([]);
    let [char, setChar] = useState([]);
    let [details, setDetails] = useState([]);
    const [rating, setRating] = useState(0);
    const [prevAva, setPrevAva] = useState(false);

    const runCallback = (cb) => {
        return cb();
    };
    const openModal = () => {
        setPrevAva(true);
    };

    const closeModal = () => {
        setPrevAva(false);
    };
    useEffect(() => {
        axios
            .get(`https://miniproject-moviereviewapp.herokuapp.com/movies/${id}`)
            .then((response) => {
                console.log(response.data.data, "inininii");
                setChar(response.data.data.character);
                setFilm(response.data.data.movie_info);
                setDetails(response.data.data);
                setRating(response.data.data.rating);
            });
    }, []);
    return (
        <div>
            <div className={styles.bannerContainer}>
                <img className={styles.imgBanner} src={details.poster} alt="imgPoster" onClick={openModal}/>
                <div className={styles.bannerInfo}>
                <Modal
                            keepMounted
                            open={prevAva}
                            onClose={closeModal}
                            aria-labelledby="keep-mounted-modal-title"
                            aria-describedby="keep-mounted-modal-description"
                        >
                            <Box>
                                <div className={styles.avaPreview}>
                                    {" "}
                                    <img
                                        src={details.poster}
                                        className="avaProfilepreview"
                                        alt="ava"
                                    />
                                </div>
                            </Box>
                        </Modal>
                    <h1>{details.title}</h1>
                    {runCallback(() => {
                        const row = [];
                        for (var i = 1; i <= 5; i++) {
                            row.push(
                                <svg
                                    width="49"
                                    height="38"
                                    viewBox="0 0 49 38"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M24.5 0L30.2251 14.5106H48.7519L33.7634 23.4787L39.4885 37.9894L24.5 29.0213L9.51148 37.9894L15.2366 23.4787L0.248058 14.5106H18.7749L24.5 0Z"
                                        fill={rating >= i ? "#EBCD00" : "#C4C4C4"}
                                    />
                                </svg>
                            );
                        }
                        return row;
                    })}

                    <p className={styles.bannerText}>{details.sypnopsis}</p>

                    <div className={styles.buttonBanner}>
                        <a
                            className={styles.lWAT}
                            href={details.trailer}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                            <button className={styles.trailer}>Watch Trailer</button>{" "}
                        </a>
                        <a className={styles.aWL}>
                            {" "}
                            <button className={styles.watchlist}>Add to Watchlist </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.containerov}>
          <div className={styles.aaa}>
           <h1 className={styles.boom1}>Synopsis</h1>
           <p className={styles.smf}>{details.sypnopsis}</p>
          </div>

          <div className={styles.titleMovieInfo}><h1 className={styles.boom}>Movie Info</h1></div>
        <div className={styles.movieInfoContainer}>
            <p className={styles.smf}><b>Genre</b> : {film.Genre}</p>
            <p className={styles.smf}><b>Original Language</b> :{film['Original Language']}</p>
            <p className={styles.smf}><b>Director</b> : {film.Director}</p>
            <p className={styles.smf}><b>Producer</b> : {film.Producer}</p>
            <p className={styles.smf}><b>Writer</b> : {film.Writer}</p>
            <p className={styles.smf}><b>Distributor</b> : {film.Distributor}</p>
            <p className={styles.smf}><b>Production</b> : {film['Production Co']}</p>
         </div>
    </div>
        </div>
    );
}

export default MovieDetail;
