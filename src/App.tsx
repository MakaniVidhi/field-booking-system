
import './App.css';
import "./global/globalCss.scss";
import "./global/loader.css";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import FieldListing from './components/FieldListing';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/fields' element={<FieldListing/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contactus' element={<ContactUs/>} />
          </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App;
