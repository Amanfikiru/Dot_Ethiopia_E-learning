import "./App.css"
import Header from './components/common/heading/Header'
import {BrowserRouter as Router, Switch} from "react-router-dom";

function App () {
  return (
    <>
      
      <Router>
        <Header />
        <Switch>
          {/*<Route path="/about">
            <About />
          </Route>*/}
        </Switch>
      </Router> 
    </>
  )
}

export default App