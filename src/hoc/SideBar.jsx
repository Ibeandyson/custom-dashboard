import './Styles/SideBar.css';
import {FaTachometerAlt, FaRegMoneyBillAlt, FaCog, FaUserSlash} from 'react-icons/fa';
import {ImUsers, ImUserPlus} from 'react-icons/im';
import {GiReceiveMoney, GiPayMoney} from 'react-icons/gi';



const SideBar = props => {
    return (
        <div>
            <div className="card side-bar-card shadow border-0">
                <div className="side-card-body">
                    <div className="side-link-container">
                        <a href="/admin_dashboard/dashboard_overview">
                            <FaTachometerAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                            <span className="side-link-text">DashBoard</span>
                        </a>
                    </div>
                    <div
                        className="side-link-container">
                        <a href="/admin_dashboard/active_users">
                            <ImUsers style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                            <span className="side-link-text">Active Users</span>
                        </a>
                    </div>
                    <div className="side-link-container">
                    <a href="/admin_dashboard/pending_users">
                        <FaUserSlash style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Pending Users</span>
                        </a>
                    </div>
                    <div className="side-link-container">
                    <a href="/admin_dashboard/declined_users">
                        <FaUserSlash style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Declined Users</span>
                        </a>
                    </div>
                    <div className="side-link-container">
                    <a href="/admin_dashboard/member_form">
                        <ImUserPlus style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Add Use</span>
                        </a>
                    </div>
                    <div className="side-link-container">
                    <a href="/admin_dashboard/active_investment">
                        <GiPayMoney style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Active Investment</span>
                        </a>
                    </div>
                    <div className="side-link-container">
                    <a href="/admin_dashboard/completed_investment">
                        <GiReceiveMoney style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Compeleted Investment</span>
                        </a>
                    </div>
                    <div className="side-link-container">
                    <a href="/admin_dashboard/pending_withdrawal">
                        <FaRegMoneyBillAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Pending Withdrawal</span>
                        </a>
                    </div>
                    <div className="side-link-container">
                    <a href="/admin_dashboard/completed_withdrawal">
                        <FaRegMoneyBillAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Completed Withdrawal</span>
                        </a>
                    </div>
                    <div className="side-link-container">
                    <a href="/admin_dashboard/failed_withdrawal">
                        <FaRegMoneyBillAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Failed Withdrawal</span>
                        </a>
                    </div>
                    <div className="side-link-container">
                    <a href="/admin_dashboard/completed_deposit">
                        <FaRegMoneyBillAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Completed Deposit</span>
                        </a>
                    </div>

                    <div className="side-link-container">
                    <a href="/admin_dashboard/failed_deposit">
                        <FaRegMoneyBillAlt style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Failed Deposit</span>
                        </a>
                    </div>

                    <div className="side-link-container">
                    <a href="/admin_dashboard/completed_deposit">
                        <FaCog style={{fontSize: '1em', marginRight: '10px', color: '#ffffff'}} />
                        <span className="side-link-text">Settings</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SideBar;
