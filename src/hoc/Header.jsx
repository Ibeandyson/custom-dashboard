// import Logo from '../asset/log.png';
import { GrMenu } from "react-icons/gr";
import { useState } from "react";
import {
  FaTachometerAlt,
  FaUserTimes,
  FaRegMoneyBillAlt,
  FaCog,
} from "react-icons/fa";
import { ImUsers, ImUserPlus } from "react-icons/im";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import Cookie from "js-cookie";

const Header = () => {
  const [mobile, setmobile] = useState("0");
  const openNav = () => {
    setmobile("250px");
    console.log("with", mobile);
  };

  function closeNav() {
    setmobile("0");
  }
  console.log("with", mobile);

  //===LOGOUT===
  const logout = () => {
    Cookie.remove("user");
    window.location.reload();
  };

  return (
    <div>
      <nav
        className="navbar fixed-top my-header  justify-content-between"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* <a className="navbar-brand" style={{ backgroundColor: "#ffffff", height: '60px', width: "60px", borderRadius: "50px"}}>
                    <img src={Logo} style={{height: '50px'}} alt="log" />
                </a> */}
        <a className="navbar-brand">
          <h5
            style={{
              fontSize: "0.9em",
              fontWeight: "bolder",
              paddingLeft: "40px",
            }}
          >
            Admin
          </h5>
        </a>

        <button
          onClick={() => logout()}
          className="btn btn-sm btn-danger my-2 my-sm-0"
          type="submit"
        >
          Logout
        </button>
        <div class="d-lg-none d-xs-block d-md-block">
          <GrMenu
            style={{ fontSize: "1em", marginRight: "10px", color: "#ffffff" }}
            onClick={() => openNav()}
          />
        </div>
      </nav>

      {/* =========== mobile ======= */}
      <div
        style={{ width: mobile, zIndex: "100000000" }}
        id="mySidenav"
        class="sidenav"
      >
        <a
          href="javascript:void(0)"
          class="closebtn"
          onClick={() => closeNav()}
        >
          &times;
        </a>

        <div className="side-link-container">
          <a href="/admin_dashboard/dashboard_overview">
            <FaTachometerAlt
              style={{ fontSize: "1em", marginRight: "10px", color: "#ffffff" }}
            />
            <span className="side-link-text">DashBoard</span>
          </a>
        </div>
        <div className="side-link-container">
          <a href="/admin_dashboard/sub_admins">
            <ImUsers
              style={{ fontSize: "1em", marginRight: "10px", color: "#ffffff" }}
            />
            <span className="side-link-text">Sub Admins</span>
          </a>
        </div>
        <div className="side-link-container">
          <a href="/admin_dashboard/active_users">
            <ImUsers
              style={{ fontSize: "1em", marginRight: "10px", color: "#ffffff" }}
            />
            <span className="side-link-text">Active Users</span>
          </a>
        </div>
        <div className="side-link-container">
          <a href="/admin_dashboard/pending_users">
            <FaTachometerAlt
              style={{ fontSize: "1em", marginRight: "10px", color: "#ffffff" }}
            />
            <span className="side-link-text">Pending Users</span>
          </a>
        </div>
        <div className="side-link-container">
          <a href="/admin_dashboard/declined_users">
            <FaUserTimes
              style={{ fontSize: "1em", marginRight: "10px", color: "#ffffff" }}
            />
            <span className="side-link-text">Declined Users</span>
          </a>
        </div>
        <div className="side-link-container">
          <a href="/admin_dashboard/member_form">
            <ImUserPlus
              style={{ fontSize: "1em", marginRight: "10px", color: "#ffffff" }}
            />
            <span className="side-link-text">Add User</span>
          </a>
        </div>
        <div className="side-link-container">
          <a href="/admin_dashboard/active_investment">
            <GiPayMoney
              style={{ fontSize: "1em", marginRight: "10px", color: "#ffffff" }}
            />
            <span className="side-link-text">Active Investment</span>
          </a>
        </div>
        <div className="side-link-container">
          <a href="/admin_dashboard/completed_investment">
            <GiReceiveMoney
              style={{ fontSize: "1em", marginRight: "10px", color: "#ffffff" }}
            />
            <span className="side-link-text">Compeleted Investment</span>
          </a>
        </div>
        <div className="side-link-container">
          <a href="/admin_dashboard/pending_withdrawal">
            <FaRegMoneyBillAlt
              style={{ fontSize: "1em", marginRight: "10px", color: "#ffffff" }}
            />
            <span className="side-link-text">Pending Withdrawal</span>
          </a>
        </div>
        <div className="side-link-container">
          <a href="/admin_dashboard/completed_withdrawal">
            <FaRegMoneyBillAlt
              style={{ fontSize: "1em", marginRight: "10px", color: "#ffffff" }}
            />
            <span className="side-link-text">Completed Withdrawal</span>
          </a>
        </div>
        <div className="side-link-container">
          <a href="/admin_dashboard/failed_withdrawal">
            <FaRegMoneyBillAlt
              style={{ fontSize: "1em", marginRight: "10px", color: "#ffffff" }}
            />
            <span className="side-link-text">Failed Withdrawal</span>
          </a>
        </div>
        <div className="side-link-container">
          <a href="/admin_dashboard/completed_deposit">
            <FaRegMoneyBillAlt
              style={{ fontSize: "1em", marginRight: "10px", color: "#ffffff" }}
            />
            <span className="side-link-text">Completed Deposit</span>
          </a>
        </div>

        <div className="side-link-container">
          <a href="/admin_dashboard/failed_deposit">
            <FaRegMoneyBillAlt
              style={{ fontSize: "1em", marginRight: "10px", color: "#ffffff" }}
            />
            <span className="side-link-text">Failed Deposit</span>
          </a>
        </div>

        <div className="side-link-container">
          <a href="/admin_dashboard/settings">
            <FaCog
              style={{ fontSize: "1em", marginRight: "10px", color: "#ffffff" }}
            />
            <span className="side-link-text">Settings</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
