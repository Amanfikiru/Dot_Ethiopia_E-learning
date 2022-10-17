import "./App.css"
import Header from './components/common/heading/Header'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import home from "./components/home/home";
import About from "./components/about/About";



function App () {
  return (
    <>
      
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={home}/>
          <Route path='/about' exact component={About}/>
        </Switch>
      </Router> 
    </>
  )
}

export default App