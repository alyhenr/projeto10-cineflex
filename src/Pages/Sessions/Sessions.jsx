import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import axios from 'axios'

import { API_URL_GET } from '../../api'
import Footer from '../../Components/Footer'

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

    button {        
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
    const [sessionData, setSessionData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(API_URL_GET + `/${id}/showtimes`)
            .then(res => setSessionData(res.data))
            .catch(res => console.log(res))
    }, [id])

    return (
        <>
            <h1 style={{ fontSize: '24px' }}>Selecione o horário</h1>
            {sessionData?.days?.map(session => (
                <SessionsWrapper key={session.id}>
                    <div className='day'>
                        <h3>{session?.weekday} - {session?.date}</h3>
                        <div>
                            {session?.showtimes?.map(showtime => (
                                <Link
                                    key={showtime.id}
                                    to={`/assentos/${showtime.id}`}
                                >
                                    <button>
                                        {showtime.name}</button>
                                </Link>
                            ))}
                        </div>
                    </div>
                </SessionsWrapper>
            ))}
            <Footer pageInfo={{
                sessionPage: true,
                data: sessionData,
            }}
            />
        </>
    )
}

export default Sessions