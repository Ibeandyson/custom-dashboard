import Logo from '../asset/log.png';
const Header = () => {
    return (
        <div>
            <nav className="navbar fixed-top  justify-content-between" style={{backgroundColor: '#ffffff'}}>
                {/* <a className="navbar-brand" style={{ backgroundColor: "#ffffff", height: '60px', width: "60px", borderRadius: "50px"}}>
                    <img src={Logo} style={{height: '50px'}} alt="log" />
                </a> */}
                <a className="navbar-brand" />

                <button className="btn btn-sm btn-danger my-2 my-sm-0" type="submit">
                    Logout
                </button>
            </nav>
        </div>
    );
};

export default Header;
