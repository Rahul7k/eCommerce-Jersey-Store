import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <p>E-Commerce Jersey Store Application Publishing Soon</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
