import './App.css';
import {BrowserRouter as  Router , Routes , Route} from "react-router-dom"
import FrontPage from './components/FrontPage';
import Mountain from './components/Mountain';
import Beaches from './components/Beaches';
import Birds from './components/Birds';
import Food from './components/Food';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<FrontPage/>}/>
          <Route path='/Mountain' element={<Mountain/>}/>
          <Route path='/Beaches' element={<Beaches/>}/>
          <Route path='/Birds' element={<Birds/>}/>
          <Route path='/Food' element={<Food/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
