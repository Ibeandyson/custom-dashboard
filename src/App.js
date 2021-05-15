import './App.css';
import DadboardComponents from './DadboardComponents';
import Login from './Auth/Loging';
import Page404 from './404';
import PrivateRoute from './PrivateRoute';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Redux/store';
import "./App.css"

function App() {
    return (
        <div className="App">
             <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute path="/admin_dashboard" component={DadboardComponents} />
                    <Route component={Page404} />
                </Switch>
            </Router>
            </Provider>
        </div>
    );
}

export default App;
