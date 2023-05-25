import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

import Footer from "../../Components/Footer";
import { seatsURL } from "../../api";

const SCSeats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 15px;
    
    width: 85%;   

    margin-top: 30px;
`;

const SCButton = styled.button`
    width: 34px;
    height: 34px;
    background: ${props => props.bgcolor};
    border: 1px solid #808F9D;
    border-radius: 50%;

    cursor: pointer;    
`;

const seatsColor = {
    "Selecionado": '#1AAE9E',
    "Disponível": '#C3CFD9',
    "Indisponível": '#FBE192',
};

const Seats = () => {
    const [seats, setSeats] = useState([]);
    const [movieData, setMovieData] = useState({});
    const { sessionID } = useParams();

    useEffect(() => {
        axios.get(seatsURL(sessionID))
            .then(res => {
                setSeats(
                    res.data.seats.map(seat => ({
                        ...seat,
                        selected: false,
                        bgColor: seat.isAvailable
                            ? seatsColor["Disponível"]
                            : seatsColor["Indisponível"],
                    }))
                );
                setMovieData({
                    posterURL: res.data.movie.posterURL,
                    title: res.data.movie.title,
                    weekday: res.data.day.weekday,
                    time: res.data.name,
                })
            })
    }, [sessionID]);

    const handleClick = id => {
        console.log("hello", id)
        setSeats(prevState => (
            [...prevState].map((seat) => (
                seat.id === id ? {
                    ...seat,
                    selected: true,
                    bgColor: seatsColor["Selecionado"],
                } : { ...seat }
            ))
        ))
    }

    return (
        <>
            <h1>Selecione o(s) assento(s)</h1>
            <SCSeats>
                {seats.length > 0 && seats.map(seat => (
                    <SCButton
                        key={seat.id}
                        bgcolor={seat.bgColor}
                        disabled={!seat.isAvailable}
                        onClick={() => handleClick(seat.id)}
                    >{seat?.name}</SCButton>
                ))}
            </SCSeats>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "40px",

                    marginTop: "20px"
                }}
            >{Object.keys(seatsColor).map(status => (
                <div key={status}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "10px",
                    }}>
                    <SCButton
                        disabled="disabled"
                        bgcolor={seatsColor[status]}
                    >{seatsColor.status}</SCButton>
                    <h4>{status}</h4>
                </div>
            ))}
            </div>
            <Footer pageInfo={{ seatsPage: true, data: movieData }} />
        </>
    )
}

export default Seats