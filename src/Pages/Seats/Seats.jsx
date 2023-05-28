import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";

import Form from "./Form";
import Footer from "../../Components/Footer";
import { API_URL_POST, seatsURL } from "../../api";
import LoadingScreen from "../../Components/LoadingScreen";

const SCSeats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 15px;
    
    width: 55%;   

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

const Seats = ({ setBuyerInfo }) => {
    const [seats, setSeats] = useState([]);
    const [movieData, setMovieData] = useState({});
    const { sessionID } = useParams();
    const navigate = useNavigate();

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
                    date: res.data.day.date,
                })
            })
    }, [sessionID]);

    const handleClick = (isAvailable, id) => {
        if (!isAvailable) {
            alert("Esse assento não está disponível");
            return;
        }
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

    const handleSubmit = (ev, formData) => {
        ev.preventDefault();
        setBuyerInfo({
            ...formData,
            title: movieData.title,
            date: movieData.date,
            time: movieData.time,
            seats: seats.filter(seat => seat.selected)
        })
        axios.post(API_URL_POST, {
            ...formData,
            ids: [...seats.filter(seat => seat.selected)].map(seat => seat.id),
        })
            .then((res) => {
                navigate("/sucesso")
                console.log(res);
            })
            .catch(() => alert("Falha ao reservar o(s) assento(s), por favor selecione novamente."));
    }

    return (
        <>
            <h1>Selecione o(s) assento(s)</h1>
            {Object.keys(seats).length > 0 ? <>
                <SCSeats>
                    {seats.length > 0 && seats.map(seat => (
                        <SCButton
                            data-test="seat"
                            key={seat.id}
                            bgcolor={seat.bgColor}
                            onClick={() => handleClick(seat.isAvailable, seat.id)}
                        >{seat.name < 10
                            ? `0${seat.name}`
                            : seat.name}</SCButton>
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
                <Form handleSubmit={handleSubmit} />
                <Footer pageInfo={{ seatsPage: true, data: movieData }} />
            </> : <LoadingScreen />}
        </>
    )
}

Seats.propTypes = {
    setBuyerInfo: PropTypes.func,
}

export default Seats