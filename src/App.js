import React, {Component} from 'react';
import Home from './projects/Home';
import { Route, Routes } from "react-router-dom";
import Counter from './projects/1-counter/Counter/Counter';
import DisplayColors from './projects/2-display-colors/DisplayColors/DisplayColors';
import ToggleMessage from './projects/3-toggle/ToggleMessage/ToggleMessage';
import HandleInput from './projects/4-handle-input/HandleInput/HandleInput';
import DisableButton from './projects/5-disable-button/DisableButton/DisableButton'

class App extends Component{
   
  render(){
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/counter" element={<Counter />}></Route>
          <Route exact path="/colors" element={<DisplayColors />}></Route>
          <Route exact path="/toggle" element={<ToggleMessage />}></Route>
          <Route exact path="/handle-input" element={<HandleInput />}></Route>
          <Route exact path="/disable-submit" element={<DisableButton />}></Route>
        </Routes> 
      </div>
    );
  }
}

export default App;
