import './App.css'; // for adding styles through cascading style sheets
import {Navbar,Nav,Container} from 'react-bootstrap'; // for a horizontal list display
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'; //for navigating between the clicks
import Home from './Home'
import Services from "./Services"
import About from "./About"
import Products from "./Products"
import Contact from "./Contact" // importing the above various modules for various pages
function App() { /* the body of the App functional component  */
  return (
    <BrowserRouter>
    <div className="App">
         <>
      <Navbar bg="success" variant="dark" expand="lg" >
        <Container>
        <Navbar.Brand href="#home"> 
        <img src = "logo.jpg" className='logo'/>
        The Web Chef
        </Navbar.Brand> 
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"> Home </Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
