import './Styles/SideBar.css';
import {FaTachometerAlt, FaUserLock, FaUserTie, FaCog, FaUserSlash} from 'react-icons/fa';
import {ImUsers, ImUserPlus} from 'react-icons/im';

const SideBar = () => {
    return (
        <div>
            <div className="card side-bar-card shadow border-0">
                <div className="side-card-body">
                    <div className="side-link-container">
                        <FaTachometerAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">DashBoard</span>
                    </div>
                    <div className="side-link-container">
                        <ImUsers style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Active Users</span>
                    </div>
                    <div className="side-link-container">
                        <FaUserSlash style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Pending Users</span>
                    </div>
                    <div className="side-link-container">
                        <FaUserLock style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Blocked Users</span>
                    </div>
                    <div className="side-link-container">
                        <ImUserPlus style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Add Use</span>
                    </div>
                    <div className="side-link-container">
                        <FaUserTie style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Profile</span>
                    </div>
                    <div className="side-link-container">
                        <FaCog style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Settings</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SideBar;
