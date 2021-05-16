import Logo from '../asset/log.png';
import {signin} from '../Redux/actions';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Preloader from '../Preloader';
import Cookie from 'js-cookie';

const Login = props => {
    const dispatch = useDispatch();
    const userSignin = useSelector(state => state.userSignin);
    const {loading, user, error} = userSignin;
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [nextpage, setNextpage] = useState(false);

    const {email, password} = formData;
    const onChangeHandler = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const onSubmitHandle = e => {
        e.preventDefault();
        dispatch(signin(email, password)).then(() => {
            setNextpage(true);
        });
    };
    if (nextpage === true) {
        props.history.push('/admin_dashboard/dashboard_overview');
        if (user) {
            window.location.reload();
        }
    }

    // ====== check for if user is authenticated before accessing this component =====
    useEffect(() => {
        if (Cookie.get('user')) {
            props.history.push('/admin_dashboard/dashboard_overview');
        }
    }, []);

    return (
        <div>
            {loading && <Preloader />}
                   <div className="container pt-5" style={{maxWidth: '500px', margin: 'auto', marginTop: '5%'}}>
                   <div className="text-center pb-5">
                       <img
                           src={Logo}
                           style={{height: '90px', width: '90px', borderRadius: '50px', backgroundColor: '#ffffff'}}
                       />
                   </div>
                   <div className="card">
                       <div className="card-body">
                           <label style={{fontSize: '0.8em', fontWeight: 'bold'}}>Email</label>
                           <input
                               className="form-control form-control-sm"
                               type="email"
                               placeholder="enter email"
                               name="email"
                               value={email}
                               onChange={e => onChangeHandler(e)}
                           />
                           {error && <p style={styles.formError}>{error.errors.email}</p>}
                           <label className="pt-3" style={{fontSize: '0.8em', fontWeight: 'bold'}}>
                               Password
                           </label>
                           <input
                               className="form-control form-control-sm"
                               type="password"
                               placeholder="enter password"
                               name="password"
                               value={password}
                               onChange={e => onChangeHandler(e)}
                           />
                           {error && <p style={styles.formError}>{error.errors.password}</p>}
                           <div className="pt-3" style={{float: 'right'}}>
                               <button type="button" className="btn btn-success" onClick={onSubmitHandle}>
                                   Login
                               </button>
                           </div>
                       </div>
                   </div>
               </div> 
     
        </div>
    );
};

const styles = {
    formError: {
        fontSize: '0.7em',
        color: 'red',
        marginTop: '10px',
        fontWeight: 'bold'
    }
};

export default Login;
