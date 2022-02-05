import './App.scss';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Elon from './pages/Elon';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

function App() {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="conteiner">
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/elon/:id">
                        <Elon />
                    </Route>
                    <Route path="/loyihahaqida" exact>
                        <About />
                    </Route>
                    <Route path="/elonberish"></Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </MuiPickersUtilsProvider>
    );
}

export default App;
