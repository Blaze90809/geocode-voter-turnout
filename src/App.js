import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css';
import Home from './home';
import Map from './map';
import Report from './report';


//This is start of our application. All of the routes will extend from here.
class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/map" component={Map} />
              <Route exact path="/reports" component={Report} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;