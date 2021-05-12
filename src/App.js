import './App.css';
import Components from "./Components"
import Login  from "./Auth/Loging"
import PrivateRoute from "./PrivateRoute"
import {
	BrowserRouter as Router,
	Route,
	Switch,

} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store"

function App() {
    return (
        <div className="App">
            <Login/>
           {/* <Components/> */}
        </div>
    );
}

export default App;
