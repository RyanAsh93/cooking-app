import HomeScreen from './components/homeScreen'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes'

function App() {
  return (
    <Router>
    <div>
      <HomeScreen />
    </div>
    </Router>
  );
}

export default App;
