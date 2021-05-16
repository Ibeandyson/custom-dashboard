import './Styles/SideBar.css';
import {FaTachometerAlt, FaRegMoneyBillAlt, FaCog, FaUserSlash} from 'react-icons/fa';
import {ImUsers, ImUserPlus} from 'react-icons/im';
import {GiReceiveMoney, GiPayMoney} from 'react-icons/gi';

const SideBar = props => {
    return (
        <div>
            <div className="card side-bar-card shadow border-0">
                <div className="side-card-body">
                    <a href="/admin_dashboard/dashboard_overview">
                        <div className="side-link-container">
                            <FaTachometerAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                            <span className="side-link-text">DashBoard</span>
                        </div>
                    </a>
                    <a href="/admin_dashboard/active_users">
                        <div className="side-link-container">
                            <ImUsers style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                            <span className="side-link-text">Active Users</span>
                        </div>
                    </a>
                    <a href="/admin_dashboard/pending_users">
                        <div className="side-link-container">
                            <FaUserSlash style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                            <span className="side-link-text">Pending Users</span>
                        </div>
                    </a>
                    <a href="/admin_dashboard/declined_users">
                        <div className="side-link-container">
                            <FaUserSlash style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                            <span className="side-link-text">Declined Users</span>
                        </div>
                    </a>
                    <a href="/admin_dashboard/member_form">
                        <div className="side-link-container">
                            <ImUserPlus style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                            <span className="side-link-text">Add Use</span>
                        </div>
                    </a>
                    <a href="/admin_dashboard/active_investment">
                        <div className="side-link-container">
                            <GiPayMoney style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                            <span className="side-link-text">Active Investment</span>
                        </div>
                    </a>
                    <a href="/admin_dashboard/completed_investment">
                        <div className="side-link-container">
                            <GiReceiveMoney style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                            <span className="side-link-text">Compeleted Investment</span>
                        </div>
                    </a>
                    <a href="/admin_dashboard/pending_withdrawal">
                        <div className="side-link-container">
                            <FaRegMoneyBillAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                            <span className="side-link-text">Pending Withdrawal</span>
                        </div>
                    </a>
                    <a href="/admin_dashboard/completed_withdrawal">
                        <div className="side-link-container">
                            <FaRegMoneyBillAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                            <span className="side-link-text">Completed Withdrawal</span>
                        </div>
                    </a>
                    <a href="/admin_dashboard/failed_withdrawal">
                        <div className="side-link-container">
                            <FaRegMoneyBillAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                            <span className="side-link-text">Failed Withdrawal</span>
                        </div>
                    </a>
                    <a href="/admin_dashboard/completed_deposit">
                        <div className="side-link-container">
                            <FaRegMoneyBillAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                            <span className="side-link-text">Completed Deposit</span>
                        </div>
                    </a>
                    <a href="/admin_dashboard/failed_deposit">
                        <div className="side-link-container">
                            <FaRegMoneyBillAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                            <span className="side-link-text">Failed Deposit</span>
                        </div>
                    </a>
                    <a href="/admin_dashboard/settings">
                    <div className="side-link-container">
                      
                            <FaCog style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                            <span className="side-link-text">Settings</span>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default SideBar;
