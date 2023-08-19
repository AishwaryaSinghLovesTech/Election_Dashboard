import logo from './logo.svg';
import './App.css';
import { Dashboard } from './components';
import AppBar from "@mui/material/AppBar";
function App() {
  return (
    
    <div className="content">
   
    <AppBar position="static"><div className="header">Election Dashboard</div></AppBar>
   
    <div className='maincontainer'>
      <Dashboard/>
    </div>
</div>

  );
}

export default App;
