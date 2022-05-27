import './App.css';
// import MiniDrawer from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>

        <Routes>
          <Route path='/'  >
            <h1>hey</h1>
            </Route>
          <Route path='/a'  >
            <h1>heya</h1>
            </Route>

        </Routes>
        
        </Router>

     
  );
}

export default App;
