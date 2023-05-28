import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Container from './Components/Container';
import Home from './Pages/Home/Home';
import Sessions from './Pages/Sessions/Sessions'
import Seats from './Pages/Seats/Seats'
import Success from './Pages/Success/Success';

const App = () => {
  const [buyerInfo, setBuyerInfo] = useState({});

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sessoes/:id' element={<Sessions />} />
          <Route path='/assentos/:sessionID' element={<Seats setBuyerInfo={setBuyerInfo} />} />
          <Route path='/sucesso' element={<Success buyerInfo={buyerInfo} />} />
        </Routes>
      </Container>
    </>
  )
}

export default App