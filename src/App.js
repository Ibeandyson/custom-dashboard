import './App.css';
import Components from './Components';
import Login from './Auth/Loging';
import Page404 from './404';
import PrivateRoute from './PrivateRoute';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Redux/store';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute  path="/admin_dashboard" component={Components} />
                    <Route component={Page404} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
