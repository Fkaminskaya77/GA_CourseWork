
import './App.css';
import Analysis from  './Analysis';
import Ratings from './Ratings';
import Reviews from './Reviews';
import SideBar from './SideBar';
import WebVisitors from'./WebVisitors';

function App() {
    return (
       <div className="App">
      
       <SideBar/>
       <Reviews/>
       <Ratings/>
       <Analysis/>
       <WebVisitors/>
      
    </div>
       );
    }
    export default App;
    
