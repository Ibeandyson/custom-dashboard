import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';
import url from '../url';
import Preloader from '../Preloader'

const DashBoardPage = () => {
    const [data, setdata] = useState();
    const [loading, setLoading] = useState(false);

    //======USER GLOBAL STATE FROM REDUX
    const userSignin = useSelector(state => state.userSignin);
    const {user} = userSignin;
    const loadData = () => {
        setLoading(true);
        axios
            .get(`${url}/api/admin/table-stats`, {
                headers: {
                    Authorization: `Bearer ${user}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            .then(res => {
                setdata(res.data.table_stats);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        loadData();
    }, []);
    return (
        <div className="pt-5 container-fluid">
             {loading && <Preloader/>}
            <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-4 py-2 px-2">
                    <div class="card border-0">
                        <div class="card-body">
                            <h5 class="card-title" style={{fontSize: '0.8em', fontWeight: 'bolder'}}>
                                Active Users
                            </h5>
                            <p class=" text-center" style={{fontSize: '2em', fontWeight: 'bolder'}}>
                                 {data && data.approved_member_count}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-6 col-lg-4 py-2 px-2">
                    <div class="card border-0">
                        <div class="card-body">
                            <h5 class="card-title" style={{fontSize: '0.8em', fontWeight: 'bolder'}}>
                                Pending Users
                            </h5>
                            <p class=" text-center" style={{fontSize: '2em', fontWeight: 'bolder'}}>
                                {data && data.pending_member_count}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-6 col-lg-4 py-2 px-2">
                    <div class="card border-0">
                        <div class="card-body">
                            <h5 class="card-title" style={{fontSize: '0.8em', fontWeight: 'bolder'}}>
                                Declined Users
                            </h5>
                            <p class=" text-center" style={{fontSize: '2em', fontWeight: 'bolder'}}>
                                {data && data.declined_member_count}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-6 col-lg-4 py-2 px-2">
                    <div class="card border-0">
                        <div class="card-body">
                            <h5 class="card-title" style={{fontSize: '0.8em', fontWeight: 'bolder'}}>
                                Active Investment
                            </h5>
                            <p class=" text-center" style={{fontSize: '2em', fontWeight: 'bolder'}}>
                                {data && data.active_investment_count}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-6 col-lg-4 py-2 px-2">
                    <div class="card border-0">
                        <div class="card-body">
                            <h5 class="card-title" style={{fontSize: '0.8em', fontWeight: 'bolder'}}>
                                Completed Investment
                            </h5>
                            <p class=" text-center" style={{fontSize: '2em', fontWeight: 'bolder'}}>
                                {data && data.completed_investment_count}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-6 col-lg-4 py-2 px-2">
                    <div class="card border-0">
                        <div class="card-body">
                            <h5 class="card-title" style={{fontSize: '0.8em', fontWeight: 'bolder'}}>
                                Pending Withdrawal
                            </h5>
                            <p class=" text-center" style={{fontSize: '2em', fontWeight: 'bolder'}}>
                                {data && data.pending_withdrawal_count}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-6 col-lg-4 py-2 px-2">
                    <div class="card border-0">
                        <div class="card-body">
                            <h5 class="card-title" style={{fontSize: '0.8em', fontWeight: 'bolder'}}>
                                Completed Withdrawal
                            </h5>
                            <p class=" text-center" style={{fontSize: '2em', fontWeight: 'bolder'}}>
                                {data && data.completed_withdrawal_count}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-6 col-lg-4 py-2 px-2">
                    <div class="card border-0">
                        <div class="card-body">
                            <h5 class="card-title" style={{fontSize: '0.8em', fontWeight: 'bolder'}}>
                                Failed Withdrawal
                            </h5>
                            <p class=" text-center" style={{fontSize: '2em', fontWeight: 'bolder'}}>
                                {data && data.failed_withdrawal_count}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-6 col-lg-4 py-2 px-2">
                    <div class="card border-0">
                        <div class="card-body">
                            <h5 class="card-title" style={{fontSize: '0.8em', fontWeight: 'bolder'}}>
                                Completed Deposit
                            </h5>
                            <p class=" text-center" style={{fontSize: '2em', fontWeight: 'bolder'}}>
                                {data && data.completed_deposit_count}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-6 col-lg-4 py-2 px-2">
                    <div class="card border-0">
                        <div class="card-body">
                            <h5 class="card-title" style={{fontSize: '0.8em', fontWeight: 'bolder'}}>
                                Failed Deposit
                            </h5>
                            <p class=" text-center" style={{fontSize: '2em', fontWeight: 'bolder'}}>
                                {data && data.failed_deposit_count}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DashBoardPage;
