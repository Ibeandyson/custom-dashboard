import './App.css';
import {Header, PageViewer, SideBar} from './hoc/index';

function App() {
    return (
        <div className="App">
            <Header />

            <div className="row">
                <div className="col-2">
                    <SideBar />
                </div>
                <div className="col-10">
                    <PageViewer />
                </div>
            </div>
        </div>
    );
}

export default App;
