import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { styled } from 'styled-components';

import { API_URL_GET } from "../../api";
import LoadingScreen from '../../Components/LoadingScreen';

const MoviesWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    column-gap: 30px;

    padding: 50px 45px 30px;  
    margin: 0 auto;
    
    flex-wrap: wrap;

    li {
        width: 130px;
        list-style-type: none;
    }

    li img {
        width: 100%;

        border-radius: 5px;
        border: 1px solid grey;
        box-shadow: 3px 3px 7px;

        cursor: pointer;

        &:hover {
            scale: 1.01;
            opacity: 0.85;
        }
    }
`;

const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(API_URL_GET)
            .then(res => setMovies(res.data))

    }, []);

    return (
        <>
            {movies.length > 0 ? <>
                <h1>Selecione o filme</h1>
                <MoviesWrapper>
                    {movies.map(movie => (
                        <li data-test="movie" key={movie.id}>
                            <Link
                                to={`sessoes/${movie.id}`}
                            >
                                <img src={movie.posterURL} alt="Movie Poster" />
                            </Link>
                        </li>
                    ))}
                </MoviesWrapper>
            </> : <LoadingScreen />}
        </>

    )
};

export default Home;