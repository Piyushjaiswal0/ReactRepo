import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import PostComponent from './Components/PostComponent';
import ButtonClick from './Components/ButtonClick';

function App() {
  return (
    <>
      <Navbar ></Navbar>
      <div className="container my-3">
        <Body></Body>
      </div>
      <ButtonClick></ButtonClick>
      <PostComponent></PostComponent>

      {/* <div className="d-flex flex-wrap justify-content-center">
        <Cards></Cards>
      </div> */}
      <Footer></Footer>
    </>
  );
}

export default App;
