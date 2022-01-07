import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import Navbar from './components/Navbar/Navbar';
import Siderdrawer from './components/Siderdrawer';
import Artistes from './pages/Artistes';
import Home from './pages/Home';
import MovieScreen from './pages/MovieScreen';



const App = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleBar, setToggleBar] = useState(false);
  const handleToggleNavSearch = () =>{
    setToggleSearch((prevNavSearch) => !prevNavSearch)
  }
  const handleToggleNavBar = () =>{
    setToggleBar((prevNavSearch) => !prevNavSearch)
  }
  return (
    <Router>
    <div className='app'>
      <div className='nav'>
      <Navbar handleToggleNavSearch={handleToggleNavSearch} handleToggleNavBar={handleToggleNavBar} toggleSearch={toggleSearch} />
      {/* <Backdrop toggleBar={toggleBar} /> */}
      <Siderdrawer  toggleBar={toggleBar} handleToggleNavBar={handleToggleNavBar} />
      </div>
      <main>
        <Switch>
          <Route exact path="/" >
            <Home toggleSearch={toggleSearch} handleToggleNavSearch={handleToggleNavSearch} />
          </Route>
          <Route exact path="/art/:id" component={Artistes} />
          <Route exact path="/:id" component={MovieScreen} />
        </Switch>
      </main>
    </div>
    </Router>
  );
};

export default App;