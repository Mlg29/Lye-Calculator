import React from 'react';
import Lye from "./pages/lye"
import './App.css';
import { Switch, Route } from "react-router-dom"
import Result from './component/Result';

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={Lye} />
        <Route exact path="/result" component={Result} />
      </Switch>
    </div>
  );
}

export default App;
