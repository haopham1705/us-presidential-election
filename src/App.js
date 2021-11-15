import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage'
import States from './pages/States'
// import StatesDetails from './pages/StatesDetails'
import ListStates from './pages/ListStates'
import NotFound from './pages/NotFound'
import Header from './components/Header';
import 'antd/dist/antd.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="states" element={<States />} />
          <Route path="states-details" element={<ListStates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
