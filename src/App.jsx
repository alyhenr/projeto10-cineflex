import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'

import Home from './Pages/Home/Home';
import GlobalStyle from './GlobalStyle';
import { styled } from 'styled-components';

axios.defaults.headers.common['Authorization'] = '0jOK4ACnS5v5hYCtV2MLlpoC';

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar>
          <h1>CINEFLEX</h1>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App