import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  URL_DETAIL,
  API_KEY,
  IMG_SIZE_LARGE,
  URL_IMG,
  IMG_SIZE_XL,
} from "../config";
import "./moviescreen.css";
import { CircularProgress } from "@material-ui/core";
import millify from "millify";
import { Link } from "react-router-dom";

const regBar = /\w+/g;

const MovieScreen = (props) => {
  const [data, setData] = useState([]);
  const id = props.match.params.id;
  const fetchMovieData = async () => {
    const { data } = await axios.get(URL_DETAIL + id + API_KEY);
    setData(data);
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
  console.log(data);
  console.log(URL_DETAIL + id + API_KEY);

  if (!data) return <CircularProgress />;

  return (
    <div className="moviescreen">
      {
        <>
          <img
            src={URL_IMG + IMG_SIZE_XL.match(regBar) + data.backdrop_path}
            alt={data.original_title}
          />
          <div className="moviescreen__info">
            <div className="moviescreen__info-collect_title">
              <h4>
                {data ? data.belongs_to_collection?.name : <CircularProgress />}
              </h4>
              <p
                className="homepage"
                onClick={() => (window.location = data?.homepage)}
              >
                website
              </p>
              <img
                src={
                  URL_IMG +
                  IMG_SIZE_LARGE +
                  data?.backdrop_path
                }
                alt="movie"
              />
            </div>
            <div className="moviescreen__info-genres">
              <ul>
                <span>genres:</span>
                {data?.genres?.map((genre) => (
                  <li key={genre.id}>{genre?.name}</li>
                ))}
              </ul>
            </div>
            <div className="moviescreen__info-overview">
                <h3>Description:</h3>
              <p>{data?.overview}</p>
            </div>
            
            <div className="moviescreen__info-details">
                <p>Title: {data?.title}</p>
                <p>vote{data?.vote_average > 1 ? "s" : ""}: {data?.vote_average}</p>
                <p>revenus: {"$"}{data?.revenue}</p>
                <p>Date: {data?.release_date}</p>
            </div>
            <div className="separator">
                {
                    data?.production_companies?.map((company) => <p>{company?.name}</p>)
                }
            </div>
            <div className="moviescreen__social">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
            </div>
          </div>
          <Link to={`/art/${data.id}`}><p className="acteurs">voir les acteurs</p></Link>
        </>
      }
    </div>
  );
};

export default MovieScreen;
