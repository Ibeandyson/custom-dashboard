import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import Preloader from '../Preloader';
import url from '../url';

const Package = () => {
    const [loading, setLoading] = useState(false);
    const [packagedata, setpackagedata] = useState([]);
    const [nexturl, setNexturl] = useState('');
    const [modal, setModal] = useState({
        data: {},
        edit: ''
    });
    const [formdata, setformdata] = useState({
        name: '',
        min_amount: '',
        max_amount: '',
        duration: '',
        roi_percent: '',
        active: false
    });
    const [succes, setsucess] = useState(false);
    const [error, seterror] = useState();

    //======USER GLOBAL STATE FROM REDUX
    const userSignin = useSelector(state => state.userSignin);
    const {user} = userSignin;

    const loadData = () => {
        setLoading(true);
        axios
            .get(`${url}/api/admin/investment-package/list`, {
                headers: {
                    Authorization: `Bearer ${user}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            .then(res => {
                setpackagedata(res.data.investment_packages);
                console.log('data', res);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    };

    const {name, min_amount, max_amount, duration, roi_percent} = formdata;
    const onChangeHandler = e => {
        setformdata({...formdata, [e.target.name]: e.target.value});
    };

    const onInactive = () => {
        setformdata({
            active: false
        });
    };
    const onActive = () => {
        setformdata({
            active: true
        });
    };
    useEffect(
        () => {
            console.log('ative', modal.data.name);
            console.log('formdata', formdata);
            setformdata({
                name: modal.data.name,
                min_amount: modal.data.min_amount,
                max_amount: modal.data.max_amount,
                duration: modal.data.duration,
                roi_percent: modal.data.roi_percent,
                active: modal.data.active
            });
        },
        [modal]
    );

    const onSubmitHandle = () => {
        // const payload = new FormData();
        // payload.append('name', formdata.name);
        // payload.append('min_amount', formdata.min_amount);
        // payload.append('max_amoun', formdata.max_amount);
        // payload.append('duration', formdata.duration);
        // payload.append('roi_percent', formdata.roi_percent);
        // payload.append('investment_package_id', modal.data.id);
        // payload.append('active', formdata.active);
        setLoading(true);
        axios
            .post(
                `${url}/api/admin/investment-package/update`,
                {
                    name: formdata.name,
                    min_amount: formdata.min_amount,
                    max_amount: formdata.max_amount,
                    duration: formdata.duration,
                    roi_percent: formdata.roi_percent,
                    investment_package_id: modal.data.id,
                    active: `${formdata.active}`
                },
                {
                    headers: {
                        Authorization: `Bearer ${user}`,
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    }
                }
            )
            .then(res => {
                setsucess(true);

                setLoading(false);
                loadData();
            })
            .catch(error => {
                console.log(error.response.data);
                setLoading(false);
                seterror(error.response.data);
            });
    };
    useEffect(() => {
        loadData();
    }, []);
    return (
        <div>
            {loading && <Preloader />}
            <div class="pt-5">
                <div class="card my-card-look">
                    <div class="card-header my-card-head my-card-head-text">Packages</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Duration</th>
                                        <th scope="col">ROI</th>
                                        <th scope="col">Max Amount</th>
                                        <th scope="col">Min Amoumt</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {packagedata.map(data => (
                                        <tr>
                                            <td style={{fontSize: '0.7em'}}>{data.name}</td>
                                            <td style={{fontSize: '0.7em'}}>{data.duration}</td>
                                            <td style={{fontSize: '0.7em'}}>{data.roi_percent}</td>
                                            <td style={{fontSize: '0.7em'}}>{data.max_amount}</td>
                                            <td style={{fontSize: '0.7em'}}>{data.min_amount}</td>
                                            <td style={{fontSize: '0.7em'}}>
                                                {data.active === true ? (
                                                    <span class="badge badge-success">Active</span>
                                                ) : (
                                                    <span class="badge badge-danger">Inactive</span>
                                                )}
                                            </td>
                                            <td style={{fontSize: '0.7em'}}>
                                                <div class="btn-group mr-2" role="group" aria-label="First group">
                                                    <button
                                                        onClick={() => setModal({data: data, edit: 'edit'})}
                                                        style={{fontSize: '0.9em'}}
                                                        type="button"
                                                        class="btn btn-secondary btn-sm"
                                                        data-toggle="modal"
                                                        data-target="#edit">
                                                        Edit
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* =======  Edit package modal ======= */}
            <div style={{zIndex: "500000"}}
                class="modal fade"
                id={modal.edit}
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">
                                Edit Package
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {loading && <Preloader />}
                            <div>
                                <div class="card my-card-look">
                                    <div class="card-header my-card-head my-card-head-text">Create New Package </div>
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-sm-12 ">
                                                <label style={{fontSize: '0.8em', fontWeight: 'bold'}}>
                                                    Package Name
                                                </label>
                                                <input
                                                    className="form-control form-control-sm"
                                                    type="text"
                                                    placeholder="enter package name"
                                                    name="name"
                                                    value={name}
                                                    onChange={e => onChangeHandler(e)}
                                                />
                                                {error && <p style={styles.formError}>{error.errors.name}</p>}
                                            </div>
                                            <div className="col-sm-12 ">
                                                <label style={{fontSize: '0.8em', fontWeight: 'bold'}}>
                                                    Package Min Amount
                                                </label>
                                                <input
                                                    className="form-control form-control-sm"
                                                    type="number"
                                                    min="1"
                                                    placeholder="enter package min amount"
                                                    name="min_amount"
                                                    value={min_amount}
                                                    onChange={e => onChangeHandler(e)}
                                                />
                                                {error && <p style={styles.formError}>{error.errors.min_amount}</p>}
                                            </div>
                                            <div className="col-sm-12 ">
                                                <label style={{fontSize: '0.8em', fontWeight: 'bold'}}>
                                                    Package Max Amount
                                                </label>
                                                <input
                                                    className="form-control form-control-sm"
                                                    type="number"
                                                    min="1"
                                                    placeholder="enter package max amount"
                                                    name="max_amount"
                                                    value={max_amount}
                                                    onChange={e => onChangeHandler(e)}
                                                />
                                                {error && <p style={styles.formError}>{error.errors.max_amount}</p>}
                                            </div>
                                            <div className="col-sm-12 ">
                                                <label style={{fontSize: '0.8em', fontWeight: 'bold'}}>
                                                    Package Duration
                                                </label>
                                                <input
                                                    className="form-control form-control-sm"
                                                    type="number"
                                                    min="1"
                                                    placeholder="enter package duration"
                                                    name="duration"
                                                    value={duration}
                                                    onChange={e => onChangeHandler(e)}
                                                />
                                                {error && <p style={styles.formError}>{error.errors.duration}</p>}
                                            </div>
                                            <div className="col-sm-12 ">
                                                <label style={{fontSize: '0.8em', fontWeight: 'bold'}}>
                                                    Package ROI
                                                </label>
                                                <input
                                                    className="form-control form-control-sm"
                                                    type="number"
                                                    placeholder="enter package roi"
                                                    name="roi_percent"
                                                    value={roi_percent}
                                                    onChange={e => onChangeHandler(e)}
                                                />
                                                {error && <p style={styles.formError}>{error.errors.roi_percent}</p>}
                                            </div>
                                        </div>
                                        {formdata.active === true ? (
                                            <div className="pt-5">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-sm btn-block"
                                                    onClick={() => onInactive()}>
                                                    Make Inactive
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="pt-5">
                                                <button
                                                    type="button"
                                                    className="btn btn-success btn-sm btn-block"
                                                    onClick={() => onActive()}>
                                                    Make Active
                                                </button>
                                            </div>
                                        )}
                                        {succes === true ? (
                                            <div class=" pt-5">
                                                <div
                                                    style={{zIndex: '700000'}}
                                                    class="alert alert-success alert-dismissible fade show"
                                                    role="alert">
                                                    <strong>Successfuly Created a new package!</strong>
                                                    <button
                                                        type="button"
                                                        class="close"
                                                        data-dismiss="alert"
                                                        aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ) : null}
                                        <div className="pt-3" style={{float: 'right'}}>
                                            <button
                                                type="button"
                                                className="btn btn-success btn-sm"
                                                onClick={onSubmitHandle}>
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* =======  View users modal ======= */}
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

export default Package;
