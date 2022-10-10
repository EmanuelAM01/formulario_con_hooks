import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Form from './components/Form/Form';
import Results from './components/Results/Results';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    emai: "",
    password: "",
    confirmPassword: "",
  })
  return (
    <div className="App">
      <Form inputs={state} setInputs={setState}/>
      <Results data={state}/>
    </div>
  );
}

export default App;
