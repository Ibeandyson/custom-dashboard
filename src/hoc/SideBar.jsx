import './Styles/SideBar.css';
import {FaTachometerAlt, FaRegMoneyBillAlt ,  FaUserTie, FaCog, FaUserSlash} from 'react-icons/fa';
import {ImUsers, ImUserPlus} from 'react-icons/im';
import {GiReceiveMoney, GiPayMoney} from "react-icons/gi"


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
                        <ImUserPlus style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Add Use</span>
                    </div>
                    <div className="side-link-container">
                        <GiPayMoney style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Active Investment</span>
                    </div>
                    <div className="side-link-container">
                        <GiReceiveMoney style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Compeleted Investment</span>
                    </div>
                    <div className="side-link-container">
                        <FaRegMoneyBillAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Pending Withdrawal</span>
                    </div>
                    <div className="side-link-container">
                        <FaRegMoneyBillAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Completed Withdrawal</span>
                    </div>
                    <div className="side-link-container">
                        <FaRegMoneyBillAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Failed Withdrawal</span>
                    </div>
                    <div className="side-link-container">
                        <FaRegMoneyBillAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Completed Deposit</span>
                    </div>
                    
                    <div className="side-link-container">
                        <FaRegMoneyBillAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Failed Deposit</span>
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
