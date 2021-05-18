import {useState, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import {useSelector} from 'react-redux';
import Preloader from '../Preloader';
import url from '../url';
import Moment from 'react-moment';

const FailedWithdrawal = () => {
    const [loading, setLoading] = useState(false);
    const [withdrawaldata, setwithdrawaldata] = useState([]);
    const [nexturl, setNexturl] = useState('');
    const [modal, setmodal] = useState({})

    //======USER GLOBAL STATE FROM REDUX
    const userSignin = useSelector(state => state.userSignin);
    const {user} = userSignin;

    const loadData = () => {
        setLoading(true);
        axios
            .get(`${url}/api/admin/withdrawal/list/failed`, {
                headers: {
                    Authorization: `Bearer ${user}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            .then(res => {
                setwithdrawaldata(res.data.withdrawals.data);
                setNexturl(res.data.withdrawals.next_page_url);
                console.log('data', res);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    };

    // ============ nex url
    const nextData = () => {
        setLoading(false);
        axios
            .get(nexturl, {
                headers: {
                    Authorization: `Bearer ${user}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            .then(res => {
                setNexturl(res.data.withdrawals.next_page_url);
                setwithdrawaldata(withdrawaldata.concat(...res.data.withdrawals.data));
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
                    <div class="card-header my-card-head my-card-head-text">Failed Withdrawal</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Code</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {withdrawaldata.map(data => (
                                        <tr>
                                            <td style={{fontSize: '0.7em'}}>{data.code}</td>
                                            <td style={{fontSize: '0.7em'}}>{data.status}</td>
                                            <td style={{fontSize: '0.7em'}}>₦{data.amount}</td>
                                            <td style={{fontSize: '0.7em'}}>
                                                <Moment format="YYYY/MM/DD">{data.created_at}</Moment>
                                            </td>
                                            <td style={{fontSize: '0.7em'}}>
                                                <div class="btn-group mr-2" role="group" aria-label="First group">
                                                    <button
                                                        onClick={() => setmodal(data.user)}
                                                        style={{fontSize: '0.9em'}}
                                                        type="button"
                                                        class="btn btn-secondary btn-sm"
                                                        data-toggle="modal"
                                                        data-target="#user">
                                                        User
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <InfiniteScroll
                                    dataLength={withdrawaldata.length}
                                    next={nextData}
                                    hasMore={withdrawaldata.current_page === withdrawaldata.last_page ? true : false}
                                    endMessage={<p style={{textAlign: 'center'}} />}
                                />
                            </table>
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
                                                    {modal.first_name} {modal.last_name}
                                                </span>
                                            </div>
                                            <hr />
                                            <div>
                                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                                    Email:
                                                </span>
                                                <span style={{fontSize: '0.7em'}} className="">
                                                    {modal.email}
                                                </span>
                                            </div>
                                            <hr />
                                            <div>
                                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                                    Acount Number:
                                                </span>
                                                <span style={{fontSize: '0.7em'}} className="">
                                                    {modal.withdrawal_bank && modal.withdrawal_bank.account_number}
                                                </span>
                                            </div>
                                            <hr />
                                            <div>
                                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                                    Acount Name:
                                                </span>
                                                <span style={{fontSize: '0.7em'}} className="">
                                                    {modal.withdrawal_bank && modal.withdrawal_bank.account_name}
                                                </span>
                                            </div>
                                            <hr />
                                            <div>
                                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                                    Bank Name:
                                                </span>
                                                <span style={{fontSize: '0.7em'}} className="">
                                                    {modal.withdrawal_bank && modal.withdrawal_bank.bank_name}
                                                </span>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* =======  View users modal ======= */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FailedWithdrawal;
