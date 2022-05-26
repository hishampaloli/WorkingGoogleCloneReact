import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'
import { withRouter } from "react-router-dom";
import SearchPage from './Pages/SearchPage/SearchPage'
import './App.css';
import Videos from './Pages/videos/VideosPage'
import Home from './Pages/Homr/Home';
import Image from './Pages/ImagePage/Images';
import Shopping from './Pages/Shopping/Shopping';
import News from './Pages/NewsPage/News';

function App() {




  return (
    
    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={withRouter(SearchPage)} />
          <Route path="/videos" component={withRouter(Videos)} />
          <Route path="/image" component={withRouter(Image)} />
          <Route path="/news" component={withRouter(News)} />
          <Route path="/Shopping" component={withRouter(Shopping)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
