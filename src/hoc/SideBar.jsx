import './Styles/SideBar.css';
import {FaTachometerAlt} from 'react-icons/fa';

const SideBar = () => {
    return (
        <div>
            <div className="card side-bar-card shadow border-0">
                <div className="side-card-body">
                    <div className="side-link-container">
                        <FaTachometerAlt style={{fontSize: '1em', marginRight: '10px'}} />
                        <span className="side-link-text">DashBoard</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SideBar;
