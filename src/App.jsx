
import HomePage from './Pages/homePage';
import { Route, Routes } from 'react-router-dom';
import LoginPages from './Pages/loginPages';

function App() {
 

  return (
    <div >

    <Routes>
    <Route path='/' element={ <HomePage/>}/>
    <Route path='/loginpages' element={ <LoginPages/>}/>
    </Routes>

    </div>
    
   
  )
}

export default App
