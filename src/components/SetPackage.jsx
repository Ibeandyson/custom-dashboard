import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import Preloader from '../Preloader';
import url from '../url';
import {set} from 'js-cookie';

const SetPackage = () => {
    const [formdata, setformdata] = useState({
        name: '',
        min_amount: '',
        max_amount: '',
        duration: '',
        roi_percent: ''
    });
    const [succes, setsucess] = useState(false);
    const [error, seterror] = useState();
    const [loading, setLoading] = useState(false);

    //======USER GLOBAL STATE FROM REDUX
    const userSignin = useSelector(state => state.userSignin);
    const {user} = userSignin;

    const {name, min_amount, max_amount, duration, roi_percent} = formdata;
    const onChangeHandler = e => {
        setformdata({...formdata, [e.target.name]: e.target.value});
    };
    const onSubmitHandle = () => {
        setLoading(true);
        axios
            .post(
                `${url}/api/admin/investment-package/new`,
                {
                    name: formdata.name,
                    min_amount: formdata.min_amount,
                    max_amount: formdata.max_amount,
                    duration: formdata.duration,
                    roi_percent: formdata.roi_percent
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
            })
            .catch(error => {
                console.log(error.response.data);
                setLoading(false);
                seterror(error.response.data);
            });
    };

    return (
        <div>
            {loading && <Preloader />}
            <div class="pt-5">
                <div class="card my-card-look">
                    <div class="card-header my-card-head my-card-head-text">Create New Package </div>
                    <div class="card-body">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <label style={{fontSize: '0.8em', fontWeight: 'bold'}}>Package Name</label>
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
                            <div className="col-sm-12 col-md-4">
                                <label style={{fontSize: '0.8em', fontWeight: 'bold'}}>Package Min Amount</label>
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
                            <div className="col-sm-12 col-md-4">
                                <label style={{fontSize: '0.8em', fontWeight: 'bold'}}>Package Max Amount</label>
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
                            <div className="col-sm-12 col-md-4">
                                <label style={{fontSize: '0.8em', fontWeight: 'bold'}}>Package Duration</label>
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
                            <div className="col-sm-12 col-md-4">
                                <label style={{fontSize: '0.8em', fontWeight: 'bold'}}>Package ROI</label>
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
                        {succes === true ? (
                          <div class=" pt-5">
                            <div
                                style={{zIndex: '700000'}}
                                class="alert alert-success alert-dismissible fade show"
                                role="alert">
                                <strong>Successfuly Created a new package!</strong>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            </div>
                        ) : null}
                        <div className="pt-3" style={{float: 'right'}}>
                            <button
                                type="button"
                                onClick={() => onSubmitHandle()}
                                className="btn btn-success btn-sm"
                                onClick={onSubmitHandle}>
                                Create
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

export default SetPackage;
