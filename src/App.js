
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/footer";
import Nav from "./components/nav";
import {HashRouter,Routes,Route} from "react-router-dom";
import {Home, Personaldetails,Orders,Payments } from "./components/Main";

function App() {
  return (
    <div>
      <HashRouter>
  <Header />
  <Nav />
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Orders" element={<Orders />} />
      <Route path="/Payments" element={<Payments />} />
      <Route path="/Personaldetails" element={<Personaldetails />} />
    </Routes>
  
<Footer />
</HashRouter>

   </div>


   
  );
}

export default App;

