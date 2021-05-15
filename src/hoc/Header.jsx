import Logo from '../asset/log.png';
import {GrMenu} from 'react-icons/gr'
import {useState, useEffect} from "react"
const Header = () => {
    const [mobile, setmobile] = useState("0")
    const openNav  = () => {
        setmobile("250px")
        console.log("with" ,mobile)
      }
      
      function closeNav() {
        setmobile("0")
      }
      console.log("with" ,mobile)
    
    return (
        <div>
            <nav className="navbar fixed-top my-header  justify-content-between" style={{backgroundColor: '#ffffff'}}>
                {/* <a className="navbar-brand" style={{ backgroundColor: "#ffffff", height: '60px', width: "60px", borderRadius: "50px"}}>
                    <img src={Logo} style={{height: '50px'}} alt="log" />
                </a> */}
                <a className="navbar-brand">
                    <h5 style={{fontSize: '0.9em', fontWeight: 'bolder', paddingLeft: '40px'}}>Admin</h5>
                </a>

                <button  className="btn btn-sm btn-danger my-2 my-sm-0" type="submit">
                    Logout
                </button>
                <div class="d-lg-none d-xs-block d-md-block" >
                <GrMenu style={{fontSize: '1em', marginRight: '10px',  color: '#ffffff'}}  onClick={()=> openNav()}/>
                </div>
            </nav>

            {/* =========== mobile ======= */}
            <div style={{width: mobile, zIndex: "100000000"}} id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onClick={() => closeNav()}>
                    &times;
                </a>

                <div className="side-link-container">
                    <a href="/admin_dashboard/dashboard_overview">
                        <span className="side-link-text">DashBoard</span>
                    </a>
                </div>
                <div className="side-link-container">
                    <a href="/admin_dashboard/active_users">
                        <span className="side-link-text">Active Users</span>
                    </a>
                </div>
                <div className="side-link-container">
                    <a href="/admin_dashboard/pending_users">
                        <span className="side-link-text">Pending Users</span>
                    </a>
                </div>
                <div className="side-link-container">
                    <a href="/admin_dashboard/declined_users">
                        <span className="side-link-text">Declined Users</span>
                    </a>
                </div>
                <div className="side-link-container">
                    <a href="/admin_dashboard/member_form">
                        <span className="side-link-text">Add Use</span>
                    </a>
                </div>
                <div className="side-link-container">
                    <a href="/admin_dashboard/active_investment">
                        <span className="side-link-text">Active Investment</span>
                    </a>
                </div>
                <div className="side-link-container">
                    <a href="/admin_dashboard/completed_investment">
                        <span className="side-link-text">Compeleted Investment</span>
                    </a>
                </div>
                <div className="side-link-container">
                    <a href="/admin_dashboard/pending_withdrawal">
                        <span className="side-link-text">Pending Withdrawal</span>
                    </a>
                </div>
                <div className="side-link-container">
                    <a href="/admin_dashboard/completed_withdrawal">
                        <span className="side-link-text">Completed Withdrawal</span>
                    </a>
                </div>
                <div className="side-link-container">
                    <a href="/admin_dashboard/failed_withdrawal">
                        <span className="side-link-text">Failed Withdrawal</span>
                    </a>
                </div>
                <div className="side-link-container">
                    <a href="/admin_dashboard/completed_deposit">
                        <span className="side-link-text">Completed Deposit</span>
                    </a>
                </div>

                <div className="side-link-container">
                    <a href="/admin_dashboard/failed_deposit">
                        <span className="side-link-text">Failed Deposit</span>
                    </a>
                </div>

                <div className="side-link-container">
                    <a href="/admin_dashboard/completed_deposit">
                        <span className="side-link-text">Settings</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
