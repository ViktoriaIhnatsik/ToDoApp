import React from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom';
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <div className="container mt-5">
    
      <Switch> 

        <Route path="/" component={TodoPage}> 
        
        </Route>

      </Switch>

    </div>
  );
}

export default App;
