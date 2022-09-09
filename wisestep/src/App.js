import logo from './logo.svg';
import './App.css';
import { City } from './component/City';
import { Onecity } from './component/Onecity';
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
        <Routes>
        <Route path="/" element={<City></City>}></Route>
          
        <Route path="/city/:id" element={<Onecity></Onecity>}></Route>
        </Routes>
     
    

    </div>
  );
}

export default App;
