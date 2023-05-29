import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const SCWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;

    width: 100%;

    padding-left: 35px;
    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 7px;   
        
        h1 {
            font-size: 26px;   
            font-weight: 700;
            color: #293845;            
            
            margin-bottom: 10px;
        }

        h3 {
            font-size: 22px;
            color: #293845;
        }
    }
    
    div:first-child {
        align-items: center;

        padding-left: 0px;

        h1 {           
            color: #247A6B;
        }    
    }

    a {
        width: 100%;
        display: flex;
        justify-content: center;

        button {        
            width: 230px;
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
    }
`;

const Success = ({ buyerInfo }) => {

    return (
        <SCWrapper>
            <div>
                <h1>Pedido feito com sucesso!</h1>
            </div>
            <div data-test="movie-info">
                <h1>Filme e sessão</h1>
                <h3>
                    {buyerInfo.title}
                </h3>
                <h3>
                    {`${buyerInfo.date} ${buyerInfo.time}`}
                </h3>
            </div>
            <div data-test="seats-info">
                <h1>Ingressos</h1>
                {buyerInfo.seats.map(seat => (
                    <h3 key={seat.id}>Assento {seat.name}</h3>
                ))}
            </div>
            <div data-test="client-info">
                <h1>Comprador</h1>
                <h3>Nome: {buyerInfo.name}</h3>
                <h3>CPF: {buyerInfo.cpf}</h3>
            </div>
            <Link to='/'>
                <button data-test="go-home-btn">Voltar para Home</button>
            </Link>
        </SCWrapper>
    )
};

Success.propTypes = {
    buyerInfo: PropTypes.object,
};

export default Success;