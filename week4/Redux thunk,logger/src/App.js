import React, { Component } from "react";
//import { Navbar, NavbarBrand } from "reactstrap";
import Main from './components/MainComponent';
import { DISHES } from "./shared/dishes";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import "./App.css";

 /* MainComponent.js will be connected to the configure store 
 App.js contains the <provider> wrapper  and calls the configurestore() 
 Reducer.js is to get the new state from initial state and action 
 
 Use the react-redux package for bindings
between React and Redux
– connect(): generates a wrapper “container”
component that subscribes to the store
– Surround your App root with <Provider>
• Takes the store as an attribute
• Makes store accessible to all connected components */

const store = ConfigureStore();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (

      <Provider store={store}> {/*<provider> is part of redux wrapper */}
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
