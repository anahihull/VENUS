
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home'
import Learn from './screens/Learn'
import Quiz from './screens/Quiz'
import Donate from './screens/Donate'

function App() {
  return (

    <Router>
      <Routes>
          <Route  exact path='/learn' element={<Learn/>}/>
          <Route  exact path='/quiz' element={<Quiz/>}/>
          <Route  exact path='/donate' element={<Donate/>}/>
          <Route  exact path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
