import {useState, useEffect} from 'react';
import CompletedWithdrawalTable from './subcomponent/CompletedWithdrawalTable';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import {useSelector} from 'react-redux';
import Preloader from '../Preloader';
import url from '../url';

const CompletedWithdrawal = () => {
    const [loading, setLoading] = useState(false);
    const [withdrawaldata, setwithdrawaldata] = useState([]);
    const [nexturl, setNexturl] = useState('');

    //======USER GLOBAL STATE FROM REDUX
    const userSignin = useSelector(state => state.userSignin);
    const {user} = userSignin;

    const loadData = () => {
        setLoading(true);
        axios
            .get(`${url}/api/admin/withdrawal/list/completed`, {
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
      loadData();
    }, []);
    return (
        <div>
            {loading && <Preloader />}
            <div class="pt-5">
                <div class="card my-card-look">
                    <div class="card-header my-card-head my-card-head-text">Completed Withdrawal</div>
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

                                <tbody>{withdrawaldata.map(data => <CompletedWithdrawalTable  data={data} />)}</tbody>
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

export default CompletedWithdrawal;
