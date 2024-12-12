import { Routes,Route } from 'react-router-dom';
import './css/App.css'
import Home from './Pages/Home';
import Favorite from './Pages/Favorite';
import NavBar from './Components/NavBar';
function App() {
  return (

    <div>
  {/* navbar */}

      <NavBar/>
      
     <main className='main-content'>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/favorites' element={<Favorite/>}/>
      </Routes>
     </main>
    </div>
  );

}

export default App;
