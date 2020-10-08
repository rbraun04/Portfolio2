import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Landing from "./components/landing";

import NoMatch from "./pages/NoMatch";

import Navbar from "./components/Navbar";
import Wrapper from "./components/wrapper";

import Broadway from './components/broadway';
import Dancers from './components/dancers';
import Actors from './components/actors';
import Artists from "./components/artists";
import Musicians from './components/musicians';


// import './App.css';
function App() {
  const [selectUser, setSelectedUser] = useState('')
  return (
    <div>
    
    <Router>

      <Wrapper>
        {/* <Switch> */}
          <Route exact path="/" component= {Landing}/>
          <Route exact path = "/musicians" component = {Musicians} />
          <Route exact path = "/artists" component = {Artists} />
          <Route exact path = "/actors" component = {Actors} />
          <Route exact path = "/dancers" component = {Dancers} />
          <Route exact path = "/broadway" component = {Broadway} />
          {/* <Route path="/profile/:username" render={(props) => <Profile {...props} />}/> */}
          {/* <Route exact path="/login" component={login} />    */}
          {/* <Route path="/broadway" component={Broadway}/>        */}
          {/* <Route path="/login" component={login} />     */}
          {/* <Route path="/pages/Payment/:title/:price" component={Payment}/>  
          <Route path="/team" component={Team} />         */}
          <Route component={NoMatch} />
        {/* </Switch> */}
      </Wrapper>
    </Router>
    </div>
  );
}
export default App;