import {useState, useEffect} from 'react';
import PackageTable from './subcomponent/PackageTable';
import axios from 'axios';
import {useSelector} from 'react-redux';
import Preloader from '../Preloader';
import url from '../url';

const Package = () => {
    const [loading, setLoading] = useState(false);
    const [packagedata, setpackagedata] = useState([]);
    const [nexturl, setNexturl] = useState('');

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

                                <tbody>{packagedata.map(data => <PackageTable data={data} />)}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;
