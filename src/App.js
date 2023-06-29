import {Route,Router,Routes,Link,BrowserRouter} from "react-router-dom";
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import styles from './components/layout/Container.module.css'
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/pages/Projects";
import LinkButton from "./components/layout/LinkButton";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container customClass='min-height'>
      <Routes>
       
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newproject' element={<NewProject />} />
      </Routes>
      </Container>
    <Footer/>
  </BrowserRouter>
);
}

export default App;
