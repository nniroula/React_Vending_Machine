import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
// import { NavLink } from 'react-router-dom';
import React from 'react';
import Soda from './Soda';
import Sardines from './Sardines';

// function App() {
const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                {/* <NavLink to='/chips'>Chips </NavLink>
                <NavLink to="/">Home </NavLink> */}
                <Route exact path="/"> 
                    <VendingMachine /> 
                </Route>
                <Route exact path="/chips"  component={Chips}> 
                    {/* <Chips />  */}
                </Route>
                {/* <Route exact path="/chips" render={() => <Chips />}  /> */}

                <Route exact path="/soda">
                    <Soda />
                </Route>
                <Route exact path="/sardines">
                    <Sardines />
                </Route>

            </Switch>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
