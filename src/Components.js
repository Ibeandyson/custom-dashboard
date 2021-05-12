import './App.css';
import {Header, PageViewer, SideBar} from './hoc/index';

function Components() {
    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-2  d-none d-lg-block">
                    <SideBar />
                </div>
                <div className="col-xs-12 col-lg-10">
                    <PageViewer />
                </div>
            </div>
        </div>
    );
}

export default Components;
