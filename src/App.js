import React from 'react';
import './App.css';
import Container from './components/container/container';

function App() {
  const [mult, setMult] = React.useState(1)

  const [location, setLocation] = React.useState(1) //! change back to 1
  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
    phone:'',
    yearlyType: false, 
    plan: 'no plan selected',
    onlineService: false,
    largerStorage: false,
    customProfile:false,
})  
  

  return (
    <div className="App">
      <Container
        location={location}
        setLocation={setLocation}
        userData={userData}
        setUserData={setUserData}
        mult={mult}
        setMult={setMult}

      />
    </div>
  );
}

export default App;
