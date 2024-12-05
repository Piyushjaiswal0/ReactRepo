import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import PostComponent from './Components/PostComponent';
import ButtonClick from './Components/ButtonClick';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Body />} />
          <Route path='/RandomGenerater' element={
          <>
            <Body/>
            <hr/>
            <ButtonClick/>
            <PostComponent/>
          </>} />
        </Routes>
        <Footer />
      </Router>
      {/* <div className="d-flex flex-wrap justify-content-center">
        <Cards></Cards>
      </div> */}
    </>
  );
}

export default App;
