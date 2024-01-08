import { useEffect } from 'react';
import './App.css'
import { Outlet } from 'react-router-dom';
function App() {

  useEffect(() => {
    console.log('componet mount ');
    return () => {
      console.log('component will unmount :');
      localStorage.clear();
    };
  }, []);

  return (
    <>
      <Outlet/>

    </>
  )
}

export default App
