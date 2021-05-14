import Moment from 'react-moment';
import {useState} from 'react';
import Preloader from '../../Preloader';
import url from '../../url';
import axios from 'axios';
import {useSelector} from 'react-redux';
import SnackBar from '../../SnackBar';

const PendingWithdrawalTable = props => {
    const [loading, setLoading] = useState(false);
    const [snack, setsnack] = useState({
        view: false,
        type: '',
        message: ''
    });

    //======USER GLOBAL STATE FROM REDUX
    const userSignin = useSelector(state => state.userSignin);
    const {user} = userSignin;

    // ===========Approved==========
    const approveFun = () => {
        setLoading(true);
        axios
            .post(
                `${url}/api/admin/withdrawal/update`,
                {
                    withdrawal_code: props.data.code,
                    status: 'completed'
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

    // ===========FAILED==========
    const failedFun = () => {
        setLoading(true);
        axios
            .post(
                `${url}/api/admin/withdrawal/update`,
                {
                    withdrawal_code: props.data.code,
                    status: 'failed'
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
            {loading && <Preloader/>}
            <td style={{fontSize: '0.7em'}}>{props.data.code}</td>
            <td style={{fontSize: '0.7em'}}>{props.data.status}</td>
            <td style={{fontSize: '0.7em'}}>{props.data.amount}</td>
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
                        Cancel
                    </button>
                </div>
            </td>

            {/* =======  View users modal ======= */}
            <div
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
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Name:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.user.first_name} {props.data.user.last_name}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Email:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.user.email}
                                </span>
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
                        <div class="modal-body">Do you want to approve this withdrawal?</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">
                                No
                            </button>
                            <button onClick={() => approveFun()} type="button" class="btn btn-success" data-dismiss="modal">
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== Approve Modal ===== */}
            {/* ========== Failed Modal ===== */}
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
                        <div class="modal-body">Do you want to Cancel this withdrawal?</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">
                                No
                            </button>
                            <button onClick={() => failedFun()} type="button" class="btn btn-success" data-dismiss="modal">
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ========== Failed Modal  ===== */}
        </tr>
    );
};

export default PendingWithdrawalTable;
