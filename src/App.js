// import logo from './logo.svg';
import './App.css';
import Navbars from './Components/Navbars';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Faq  from './Components/Faq';
import Join from './Components/Join';



function App() {
  return (
    <>
    <Navbars/>
    {/* <Navbar/> */}
    <Home/>
    <Aboutus/>
    <Faq/>
    <Join/>
    {/* <Responsive1/> */}
    </>
  );
}

export default App;
