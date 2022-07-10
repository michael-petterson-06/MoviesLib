import './App.css'
import { Link, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {


  return (
    <div className="App">
      <NavBar />    
      <h2>Movies lib</h2>
      <Outlet/>
     </div>
  )
}

export default App
