import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import InputField from './components/InputField';
import { useState } from 'react';
import TextField from './components/TextField';
import {useEffect } from 'react';
import CreateEmployee from './pages/CreateEmployee';


function App() {
  const [userName, setUserName] = useState('Your Name');
  const onUserNameChange = (value) =>{
    setUserName(value);
  }

  const [displayName, setDisplayName] = useState(' ');
  const onButtonClick = () => {
      setDisplayName(userName)
  }
  
  useEffect(()=>{
    setUserName(' ');
  },[displayName])

  useEffect(()=>{
      setUserName("neena")
  },[])

  return (
    <div className="App">
        <Button label="Click Me" handleClick={onButtonClick}/>

        {/* uncontrolled */}
        {/* <InputField label="User name" onChange={(value)=>console.log(value)} /> */}

        {/* controlled */}
        <InputField label="User name" defaultvalue={userName} onChange={onUserNameChange} />
        {/* {userName} */}

        <TextField text= {displayName} />
        <CreateEmployee/>
    </div>
  );
}

export default App;
