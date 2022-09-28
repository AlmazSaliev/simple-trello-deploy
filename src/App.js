import "./App.css";
import { WorkPages } from "./comp/WorkPages";
import { SingUp } from "./comp/SingUp";
import { AllPages } from "./comp/AllPages";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Route path="/*">
          <Redirect to="/main" />
        </Route>
        <Route path="/registration" exact>
          <SingUp />
        </Route>
        <Route path="/main" exact>
          <AllPages />
        </Route>
        <Route path="/workpage" exact>
          <WorkPages />
        </Route>
      </BrowserRouter>
    </div>
  );
}
export default App;
