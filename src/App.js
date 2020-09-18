import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Info from './Section/Info/Info';
import Input from './Components/Input/Input';
import Statistics from './Section/Statistics/Statistics';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <header >
        <Info />
      </header>
      <Input />
      <section >
        <Statistics />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
