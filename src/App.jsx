import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios'

import GlobalStyle from './GlobalStyle';
import Home from './Pages/Home/Home';
import Sessions from './Pages/Sessions/Sessions'
import { styled } from 'styled-components';

axios.defaults.headers.common['Authorization'] = '0jOK4ACnS5v5hYCtV2MLlpoC';

const Navbar = styled.div`
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin: 100px auto 50px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar>
          <Link to={'/'}><h1>CINEFLEX</h1></Link>
        </Navbar>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sessoes/:id' element={<Sessions />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App