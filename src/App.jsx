import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'

import GlobalStyle from './GlobalStyle';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import Home from './Pages/Home/Home';
import Sessions from './Pages/Sessions/Sessions'

axios.defaults.headers.common['Authorization'] = '0jOK4ACnS5v5hYCtV2MLlpoC';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
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