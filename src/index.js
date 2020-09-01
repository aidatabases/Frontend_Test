
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect,Router } from "react-router-dom";
import Aboutus from "views/examples/Aboutus";
import Homepage from "./views/examples/Homepage";
import App4 from "./views/examples/App4";
import Hscountry from './views/examples/Hscountry';
import Country from './views/examples/Country'
import Hscodename from './views/examples/Hscodename'
import Items from './views/examples/Items'
import history from "./components/login/history"
import './index.css';
import App from './App.jsx';

import LandingPage from "views/examples/LandingPage.js";    
import TradeAnalytics from "views/examples/AITradeAnalyticsHome";
import Economics from "views/examples/AIEconomics";
import ReactAbout from "views/examples/reactAbout";
import Page from 'views/examples/Aidemo'
import Navbaar from "views/examples/navbaar";
import NewFooter from "views/examples/NewFooter";
import Navbaar2 from "views/examples/navbaar2";
import Profile from "./views/examples/Profile";
import { AuthDataContext } from "components/login/AuthDataProvider";

const PrivateRoute = ({ component, ...options }) => {
  const user = useContext(AuthDataContext);
  console.log(user)
  if(user.session)
  return <Route {...options} component={component} />;
  else
  return <Route path="/" component={App} />;
};
ReactDOM.render(
  <div >
    <Navbaar2 />  
  <div>
     <Router history={history} >
     <Switch>
     <Route
       exact path= "/profile"
        render={props => <Profile {...props} />}
      />
   0   <PrivateRoute path="/About" component={ReactAbout} /> 
       <PrivateRoute exact path="/" component={LandingPage} />
       <Route
        path="/Login"
        render={props => <App {...props} />}
      />
       <Route
        path="/Register"
        render={props => <App {...props} />}
      />
      <PrivateRoute exact path="/AI-TradeAnalytics" component={TradeAnalytics} /> 
      <PrivateRoute exact path="/AI-Economics" component={Economics} />
      <PrivateRoute exact path="/AI-Demographics" component={Page} />
      <Route path="/">
        <br /><br /><br />  
        <h3>404 Page Not Found!</h3>
      </Route>
      {/* <Route path="/:lev2/:lev3/:lev4/:lev5" ><Example/></Route> */}
        
      </Switch>
      </Router>
  </div>
  <div>
    <NewFooter />
  </div>
</div>,document.getElementById("root")
 );