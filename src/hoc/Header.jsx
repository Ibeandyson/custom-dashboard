import Logo from '../asset/log.png';
const Header = () => {
    return (
        <div>
            <nav className="navbar fixed-top my-header  justify-content-between" style={{backgroundColor: '#ffffff'}}>
                {/* <a className="navbar-brand" style={{ backgroundColor: "#ffffff", height: '60px', width: "60px", borderRadius: "50px"}}>
                    <img src={Logo} style={{height: '50px'}} alt="log" />
                </a> */}
                <a className="navbar-brand">
                    <h5 style={{fontSize: '0.9em', fontWeight: 'bolder', paddingLeft: "40px"}}>Admin</h5>
                </a>

                <button className="btn btn-sm btn-danger my-2 my-sm-0" type="submit">
                    Logout
                </button>
            </nav>
        </div>
    );
};

export default Header;
