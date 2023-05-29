import { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components'

const SCForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;

    margin-top: 40px;
    margin-bottom: 160px;

    label {
        font-size: 18px;
        color: #293845;

        cursor: pointer;
    }
    input {
        width: 330px;
        height: 50px;
        background-color: #FFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        padding: 5px 15px;

        font-size: 22px;

        &::placeholder{
            font-family: 'Roboto';
            font-style: italic;
            font-size: 16px;
            color: #AFAFAF;
        }
    }
    
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
`;

const SCInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 5px;
`;

const Form = ({ handleSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        cpf: "",
    })

    const handleChange = ev => {
        const newData = { ...formData };
        newData[ev.target.name] = ev.target.value;
        setFormData(newData);
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        handleSubmit(e, formData);
        setFormData({
            name: "",
            cpf: "",
        });

    };

    return (
        <SCForm onSubmit={handleFormSubmit}>
            <SCInputWrapper>
                <label htmlFor="name">Nome do comprador:</label>
                <input
                    data-test="client-name"
                    required
                    id="name"
                    name="name"
                    type="text"
                    placeholder='Digite seu nome...'
                    value={formData.name}
                    onChange={handleChange}
                />
            </SCInputWrapper>
            <SCInputWrapper>
                <label htmlFor="cpf">CPF do comprador:</label>
                <input
                    data-test="client-cpf"
                    required
                    id="cpf"
                    name="cpf"
                    type="text"
                    placeholder='Digite seu CPF...'
                    value={formData.cpf}
                    onChange={handleChange}
                />
            </SCInputWrapper>
            <button data-test="book-seat-btn" type='submit'>Reservar assento(s)</button>
        </SCForm>
    )
};

Form.propTypes = {
    handleSubmit: PropTypes.func,
};

export default Form;