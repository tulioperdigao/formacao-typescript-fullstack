import React from 'react';
import {Card} from './components/card'
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <Header/>
      <div>
        Hello World
        <Card 
          id={1}
          paragraph='Typescript'
          details='TS para front-end e back-end'
        />
        <Card 
          id={2}
          paragraph='HTML'
          details='HTML para front-end'
        />
        <Card 
          id={3}
          paragraph='CSS'
          details='CSS para front-end'
        />
        <Card 
          id={4}
          paragraph='SQL'
          details='SQL para banco de dados'
        />
      </div>
      <Footer/>
    </>
  );
}

export default App;
