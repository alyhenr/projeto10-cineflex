import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import arrowImg from "../assets/arrow-back-outline.svg";

const SCNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 70px;

  background-color: #C3CFD9;
  margin-bottom: 50px;

  h1{
    font-weight: 400;
    font-size: 34px;

    color: #E8833A;
  }

  img {
    position: absolute;
    top: 20%;
    left: 10px;

    width: 45px;
    height: auto;

    cursor: pointer;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <SCNavbar>
        {window.location.pathname !== '/' &&
          <img
            data-test="go-home-header-btn"
            onClick={() => navigate(-1)}
            src={arrowImg}
            alt="arrow back" />}
        <Link to={'/'}>
          <h1>CINEFLEX</h1>
        </Link>
      </SCNavbar >
    </>
  )
};

export default Navbar;