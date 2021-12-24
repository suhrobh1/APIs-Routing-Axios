import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import DisplayAll from './components/DisplayAll';


function App() {

const [countryList, setCountryList] = useState([]);

  return (
    <div className= "App">
    <Form countryList = {countryList} setCountryList = {setCountryList}/>
    <DisplayAll countryList = {countryList} setCountryList = {setCountryList}/>

    </div>
  );
}

export default App;

//28:00 installation of bootstrap
//56
//npm install axios
//npm install @reach/router --legacy-peer-deps