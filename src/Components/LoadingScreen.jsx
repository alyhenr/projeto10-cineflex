import { styled } from 'styled-components';

const SCWrapper = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 15;

    width: 100%;
    height: 100%;

    .loader {
        position: absolute;
        top: 250px;
        left: 0;
        right: 0;
        margin: 0 auto;
        border: 20px solid #EAF0F6;
        border-radius: 50%;
        border-top: 20px solid #FF7A59;
        width: 200px;
        height: 200px;
        animation: spinner 4s linear infinite;
    }


    @keyframes spinner {
        0% { 
            transform: rotate(0deg); 
        }
        100% { 
            transform: rotate(360deg); 
        }
    }
`;

// ---------------------------------------
const LoadingScreen = () => {
    return (
        <SCWrapper>
            <div className="loader"></div>
        </SCWrapper>
    )
}

export default LoadingScreen