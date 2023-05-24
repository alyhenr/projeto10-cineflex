import { useState, useEffect } from 'react'
import axios from 'axios'

import { API_URL_GET } from "../../api";
import { styled } from 'styled-components';

const MoviesWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 50px;

    padding: 50px 45px 30px;  
    
    flex-wrap: wrap;

    li {
        width: 130px;
        list-style-type: none;
    }

    li>img {
        width: 100%;
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
            <h1>Selecione o filme</h1>
            <MoviesWrapper>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <img src={movie.posterURL} alt="Movie Poster" />
                    </li>
                ))}
            </MoviesWrapper>
        </>
    )
}

export default Home