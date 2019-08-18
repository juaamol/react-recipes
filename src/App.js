import React from "react";
import "./App.css";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Background from './hoc/background';


function App() {
  return (
    <Background>
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  </Background>
    
  );
}

export default App;
