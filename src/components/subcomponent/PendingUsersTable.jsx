import Moment from 'react-moment';
import {useState} from 'react';
import Preloader from '../../Preloader';
import url from '../../url';
import axios from 'axios';
import {useSelector} from 'react-redux';

const PendingUsersTable = props => {
    const [loading, setLoading] = useState(false);

    //======USER GLOBAL STATE FROM REDUX
    const userSignin = useSelector(state => state.userSignin);
    const {user} = userSignin;

    // ===========Approved==========
    const approveFun = () => {
        setLoading(true);
        axios
            .post(
                `${url}/api/admin/member/update`,
                {
                    user_code: props.data.code,
                    status: 'approved'
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
                setLoading(false);
                props.loadData();
            });
    };

    // ===========Declined==========
    const declinedFun = () => {
        setLoading(true);
        axios
            .post(
                `${url}/api/admin/member/update`,
                {
                    user_code: props.data.code,
                    status: 'declined'
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
                setLoading(false);
                props.loadData();
            });
    };
    return (
        <tr>
            {loading && <Preloader />}
            <td style={{fontSize: '0.7em'}}>{props.data.code}</td>
            <td style={{fontSize: '0.7em'}}>
                {props.data.first_name} {props.data.last_name} {props.data.midlde_name}
            </td>
            <td style={{fontSize: '0.7em'}}>{props.data.status}</td>
            <td style={{fontSize: '0.7em'}}>
                <Moment format="YYYY/MM/DD">{props.data.created_at}</Moment>
            </td>
            <td style={{fontSize: '0.7em'}}>
                <div class="btn-group mr-2" role="group" aria-label="First group">
                    <button
                        style={{fontSize: '0.9em'}}
                        type="button"
                        class="btn btn-secondary btn-sm"
                        data-toggle="modal"
                        data-target="#user">
                        User
                    </button>
                    <button
                        style={{fontSize: '0.9em'}}
                        type="button"
                        class="btn btn-success btn-sm"
                        data-toggle="modal"
                        data-target="#approve">
                        Approve
                    </button>
                    <button
                        style={{fontSize: '0.9em'}}
                        type="button"
                        class="btn btn-danger btn-sm"
                        data-toggle="modal"
                        data-target="#failed">
                        Decline
                    </button>
                </div>
            </td>
            {/* =======  View users modal ======= */}
            <div
                style={{zIndex: '500000'}}
                class="modal fade"
                id="user"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">
                                User
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="text-center">
                                <img
                                    src={
                                        props.data.profile_image === null ? (
                                            'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg'
                                        ) : (
                                            props.data.profile_image
                                        )
                                    }
                                    style={{height: '60px', width: '60px', borderRadius: '50px'}}
                                />
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Name:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.first_name} {props.data.last_name} {props.data.middle_name}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Email:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.email}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    DOB:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.DOB}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Address1:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.address1}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Address2:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.address2}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Gender:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.gender}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Phone:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.phone}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Available Balance:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.available_balance}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Employment Status:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.employment_status}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    State:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.state_code}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    State:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.state_code}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Identification Type:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.identification_type}
                                </span>
                            </div>
                            <hr />
                            <div className="text-center">
                                <p style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Identification File:
                                </p>
                                <img src={props.data.identification_image} style={{height: '100%', width: '100%'}} />
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            {/* =======  View users modal ======= */}

            {/* ========== Approve Modal ===== */}
            <div
                class="modal fade"
                id="approve"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">Do you want to approve this Member?</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">
                                No
                            </button>
                            <button
                                onClick={() => approveFun()}
                                type="button"
                                class="btn btn-success"
                                data-dismiss="modal">
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== Approve Modal ===== */}
            {/* ========== Declined Modal ===== */}
            <div
                class="modal fade"
                id="failed"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">Do you want to Declined this Member?</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">
                                No
                            </button>
                            <button
                                onClick={() => declinedFun()}
                                type="button"
                                class="btn btn-success"
                                data-dismiss="modal">
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== Declined Modal  ===== */}
        </tr>
    );
};

export default PendingUsersTable;
