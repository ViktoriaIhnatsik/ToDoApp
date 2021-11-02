import React from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom';
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <div className="container text-center mt-5">
      <p>Hello</p>
    
      <Switch> 

        <Route path="/" component={TodoPage}> 
        
        </Route>

      </Switch>

    </div>
  );
}

export default App;
