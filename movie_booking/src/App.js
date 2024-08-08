import './App.css';
import Loading from './components/loader.js'
import React from 'react';
import { useState,useEffect } from 'react';

function App() {
  const [isLoading,setLoading] = useState(true);

  useEffect(()=>
  {
    setTimeout(()=>{
      setLoading(false);
    },3000)
  })

  if(isLoading)
    return(<div class="max-h-svh max-w-svw">
        <Loading/>
      </div>)

  return (
    <div class="container">
        
    </div>
  );
}

export default App;
