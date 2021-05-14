import {useState, useEffect} from 'react';
import CompletedInvestmentTable from './subcomponent/CompletedInvestmentTable';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import {useSelector} from 'react-redux';
import Preloader from '../Preloader';
import url from '../url';

const CompletedInvestment = () => {
    const [loading, setLoading] = useState(false);
    const [investmentdata, setInvestmentdata] = useState([]);
    const [nexturl, setNexturl] = useState('');

    //======USER GLOBAL STATE FROM REDUX
    const userSignin = useSelector(state => state.userSignin);
    const {user} = userSignin;

    const loadActiveInvestmentData = () => {
        setLoading(true);
        axios
            .get(`${url}/api/admin/investment/list/completed`, {
                headers: {
                    Authorization: `Bearer ${user}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            .then(res => {
                setInvestmentdata(res.data.investments.data);
                setNexturl(res.data.investments.next_page_url);
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
                setNexturl(res.data.investments.next_page_url);
                setInvestmentdata(investmentdata.concat(...res.data.investments.data) );
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
                    <div class="card-header my-card-head my-card-head-text">Completed Investmwnt</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Code</th>
                                        <th scope="col">Package</th>
                                        <th scope="col">ROI</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>

                                <tbody>{investmentdata.map(data => <CompletedInvestmentTable data={data} />)}</tbody>
                                <InfiniteScroll
                                    dataLength={investmentdata.length}
                                    next={nextData}
                                    hasMore={investmentdata.current_page === investmentdata.last_page ? true : false}
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

export default CompletedInvestment;
