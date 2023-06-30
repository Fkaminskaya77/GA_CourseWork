
import './App.css';
import './index.js';
import Feed from "./Feed";

function App(props) {
  return (
    <div className="App">
    
    <div>
     <h1 className="header">Dino Feed</h1>
     <Feed {...props} />
    </div>
    
    </div>

  );
}
    

export default App;


