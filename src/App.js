import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route exact path="/"> <VendingMachine /> </Route>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
