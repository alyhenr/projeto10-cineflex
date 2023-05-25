import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { API_URL_GET } from '../../api'
import { styled } from 'styled-components'

const SessionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;    

    width: 100%; 
    margin-top: 40px;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 10px;

        width: 100%;

        margin: 0 auto;
        padding: 5px 25px;
    }

    div>div {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 10px;
        padding: 0;
    }

    div>div>button {        
        width: 105px;
        height: 45px;        

        background: #E8833A;
        border-radius: 3px;

        margin: 10px 15px 0 0;
        border: none;
        
        font-weight: 400;
        font-size: 18px;
        color: #FFF;

        cursor: pointer;
        &:hover {
            scale: 1.01;
            opacity: 0.9;
            border: 1px solid grey;
        }
    }

    h3 {
       font-weight: 400;
        font-size: 20px; 
        color: #293845;
    }
`;

const Sessions = () => {
    const [sessionTimes, setSessionTimes] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        axios.get(API_URL_GET + `/${id}/showtimes`)
            .then(res => setSessionTimes(res.data.days))
            .catch(res => console.log(res))
    }, [id])


    return (
        <>
            <h1>Selecione o horário</h1>
            {sessionTimes.map(session => (
                <SessionsWrapper key={session.id}>
                    <div className='day'>
                        <h3>{session?.weekday} - {session?.date}</h3>
                        <div>
                            {session?.showtimes?.map(showtime => (
                                <button key={showtime.id}>
                                    {showtime.name}</button>
                            ))}
                        </div>
                    </div>
                </SessionsWrapper>
            ))}

        </>
    )
}

export default Sessions