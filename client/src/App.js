import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login'
import Details from './components/Details';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route ,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter >
    <Switch>
      <Route exact path="/" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/details" component={Details}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
