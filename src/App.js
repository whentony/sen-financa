import logo from './logo.svg';
import './App.css';
import Copyright from './components/copyright';
import Bartop from './components/bar-top';
import BarUtil from './components/bar-utl';
import Table from './components/table';

function App() {
  return (
    <div>
      <Bartop />
      <BarUtil />
      <Table></Table>
      <Copyright />
    </div>
  );
}

export default App;
