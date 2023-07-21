import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Layout/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer/Footer';


function App() {
  return (
    <Router>
       <Navbar />
       
       <Routes>
        
        <Route exact path='/' element={<Home />} />
        
         
       </Routes>
       <Footer />
    </Router>
  );
}

export default App;
