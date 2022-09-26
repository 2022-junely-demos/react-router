import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import CatList from './components/Cats/CatList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cats" component={CatList} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
