import logo from './logo.svg';
import './App.css';
import Copyright from './components/copyright';
import Bartop from './components/bar-top';
import BarUtil from './components/bar-utl';
import Table from './components/table';
import { TableContext, TableProvider } from './common/context';


function App() {
  return (
    <div>

      
      <TableProvider>
        <Bartop />
        <BarUtil />
        <Table></Table>
      </TableProvider>
     
      
      
      <Copyright />
    </div>
  );
}

export default App;
