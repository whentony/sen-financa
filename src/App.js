import logo from './logo.svg';
import './App.css';
import Copyright from './components/copyright';
import Bartop from './components/bar-top';
import BarUtil from './components/bar-utl';

function App() {
  return (
    <div>
      <Bartop />
      <BarUtil />
      <div>teste</div>
      <Copyright />
    </div>
  );
}

export default App;
