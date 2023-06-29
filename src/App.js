import { Route, BrowserRouter, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Home/navbar';
import Landing from './Home/landing';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Landing></Landing>
      <Footer></Footer>
    </>
  );
}

export default App;
