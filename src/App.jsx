import React, { useRef } from 'react';
 import Navbar from './components/navbar';
 import Herosection from './components/herosection';
 import { usercontext } from './features/UserContext';
 
function App() {
  const bref=useRef();
  const cref=useRef();
  var refs={
    bref,
    cref
  }
  return (
  <usercontext.Provider value={refs}>
  <section style={{boxSizing:"border-box",width:'100%',margin:'0px',width:'100%',backgroundColor:'rgb(53, 84, 112)',padding:'5px'}}>
   
     <Navbar />
  
   
    <Herosection/>
  </section>
  </usercontext.Provider>
  )
 

}

export default App;
