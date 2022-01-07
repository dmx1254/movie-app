import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import {
  FETCH__MOVIES,
  URL_SEARCH,
  URL_IMG,
  IMG_SIZE_SMALL,
  API_KEY_ALT,
} from "../config";
import Spinner from "../components/Spinner";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";

const Home = ({ toggleSearch }) => {
  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [index, setIndex] = useState(0);
  const [fetchQueryData, setFetchQueryData] = useState([]);
  const queryFetch = async (seachTerm) => {
    const { data } = await axios.get(URL_SEARCH + seachTerm + API_KEY_ALT);
    setFetchQueryData(data);
  };

  const fetchData = async () => {
    const { data } = await axios.get(FETCH__MOVIES);
    setData(data);
  };

  useEffect(() => {
    fetchData();
    queryFetch(inputVal);
  }, [inputVal]);

  const valeur = inputVal ? fetchQueryData.results : data.results;

  //   const handleIconToggle = () => {
  //     setIconToggle((prevState) => !prevState);
  //   };

  const handleLeftClick = () => {
    let leftValue = index > 0 && index < data.results.length ? index - 1 : 0;
    setIndex(leftValue);
  };

  const handleRightClick = () => {
    let rightValue = index < data.results.length - 1 ? index + 1 : 0;
    setIndex(rightValue);
  };

  return (
    <div className="home">
      <div className="home__fetch">
        {!data.results ? (
          <Spinner />
        ) : (
          <Wrapper
            handleLeftClick={handleLeftClick}
            handleRightClick={handleRightClick}
            data={data.results[index]}
          />
        )}
      </div>
      <div className="home__search">
        {
          valeur && toggleSearch &&
          <div className="searchbar">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="recherche"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            />
          <i className="fas fa-search"></i>
        </div>
          }

        <div className="home__search__content">
          {!valeur ? (
            <Spinner />
          ) : (
            valeur.map((data) => (
              <div key={data.id} className="film__container">
                <Link to={`${data.id}`}>
                  <img
                    src={URL_IMG + IMG_SIZE_SMALL + data.backdrop_path}
                    alt="movie"
                  />
                </Link>
                <h4>{data.title}</h4>
                {/* <p></p> */}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
