import { Link } from "react-router-dom";
import { styled } from "styled-components";

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
`;

const Navbar = () => {
    return (
        <>
            <SCNavbar>
                <Link to={'/'}>
                    <h1>CINEFLEX</h1>
                </Link>
            </SCNavbar>
        </>
    )
}

export default Navbar