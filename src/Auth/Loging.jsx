import Logo from "../asset/log.png"
const Login = () => {
    return (
        <div>
            <div className="container pt-5" style={{maxWidth: '500px', margin: 'auto', marginTop: "5%"}}>
                <div className="text-center pb-5">
                <img src={Logo} style={{height: "90px", width: '90px', borderRadius: '50px' , backgroundColor: '#ffffff'}}/>
                </div>
                <div className="card">
                    <div className="card-body">
                        <label style={{fontSize: '0.8em', fontWeight: 'bold'}}>Email</label>
                        <input className="form-control form-control-sm" type="email" placeholder="enter email" />
                        <label className="pt-3" style={{fontSize: '0.8em', fontWeight: 'bold'}}>Password</label>
                        <input className="form-control form-control-sm" type="password" placeholder="enter Password" />
                        <div className="pt-3" style={{float: "right"}}>
                            <button type="button" className="btn btn-success">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
