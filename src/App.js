import './App.css';
// import Header from './components/Header';
import Footer from './components/Footer';
import Start from './components/Start';
import Login from './components/Login';
import Living from './components/Living';
import Living2 from './components/Living2';
import Pick from './components/Pick';
import Location from './components/Location';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Start />} /> 
          <Route path="/Login" element={<Login />} />
          <Route path="/Living" element={<Living />} />
          <Route path="/Living2" element={<Living2 />} />
          <Route path="/Pick" element={<Pick />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;