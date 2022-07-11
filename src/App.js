import React from 'react';
// import {BrowserRouter, Route} from 'react-router-dom';
// import Switch  from 'react-router';
import {
    BrowserRouter,
    Switch,
    Route

} from "react-router-dom";
import NameList from './components/pages/NameList/NameList';
import Headerbar from './components/Headerbar/Headerbar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';

function App() {
  return (
   <div>
    <BrowserRouter>
     <Headerbar />
     <Switch>
     <Route path="/about">
       <About />
     </Route>
     <Route path="/name list">
        <NameList />
     </Route>
     <Route path="/">
      <Home />
    </Route>
    </Switch>
    </BrowserRouter>
     
   </div>
  );
}

export default App;
