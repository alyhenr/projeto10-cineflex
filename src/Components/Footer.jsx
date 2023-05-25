import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const SCFooter = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: 120px;

    padding: 10px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    box-shadow: 0 -1px 5px;

    img {
        height: 100%;
        width: auto;
    }
`;


const Footer = ({ pageInfo }) => {
    console.log(pageInfo);
    return (
        <>
            <SCFooter>
                {pageInfo.session &&
                    <>
                        <img src={pageInfo.data?.posterURL} alt='movie poster' />
                        <h2>{pageInfo.data?.title}</h2>
                    </>
                }
            </SCFooter>
        </>
    )
}

Footer.propTypes = {
    pageInfo: PropTypes.object,
};

export default Footer