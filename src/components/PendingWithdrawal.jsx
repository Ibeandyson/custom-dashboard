import {useState, useEffect} from 'react';
import PendingWithdrawalTable from './subcomponent/PendingWithdrawalTable';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import {useSelector} from 'react-redux';
import Preloader from '../Preloader';
import url from '../url';

const PendingWithdrawal= () => {
    const [loading, setLoading] = useState(false);
    const [withdrawaldata, setwithdrawaldata] = useState([]);
    const [nexturl, setNexturl] = useState('');

    //======USER GLOBAL STATE FROM REDUX
    const userSignin = useSelector(state => state.userSignin);
    const {user} = userSignin;

    const loadActiveInvestmentData = () => {
        setLoading(true);
        axios
            .get(`${url}/api/admin/withdrawal/list/pending`, {
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
                setwithdrawaldata(withdrawaldata.concat(...res.data.withdrawals.data) );
            });
    };

    useEffect(() => {
        loadActiveInvestmentData();
    }, []);
    return (
        <div>
            {loading && <Preloader />}
            <div class="pt-5">
                <div class="card my-card-look">
                    <div class="card-header my-card-head my-card-head-text">Active Investmwnt</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Code</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Created At</th>
                                    </tr>
                                </thead>

                                <tbody>{withdrawaldata.map(data => <PendingWithdrawalTable data={data} />)}</tbody>
                                <InfiniteScroll
                                    dataLength={withdrawaldata.length}
                                    next={nextData}
                                    hasMore={withdrawaldata.current_page === withdrawaldata.last_page ? true : false}
                                    endMessage={<p style={{textAlign: 'center'}} />}
                                />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PendingWithdrawal;
