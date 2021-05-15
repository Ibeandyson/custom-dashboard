import {useState, useEffect} from 'react';
import PendingUsersTable from './subcomponent/PendingUsersTable';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import {useSelector} from 'react-redux';
import Preloader from '../Preloader';
import url from '../url';


const  PendingUsers = () => {
    const [loading, setLoading] = useState(false);
    const [membersdata, setmembersdata] = useState([]);
    const [nexturl, setNexturl] = useState('');

    //======USER GLOBAL STATE FROM REDUX
    const userSignin = useSelector(state => state.userSignin);
    const {user} = userSignin;

    const loadData = () => {
        setLoading(true);
        axios
            .get(`${url}/api/admin/member/list/pending`, {
                headers: {
                    Authorization: `Bearer ${user}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            .then(res => {
                setmembersdata(res.data.members.data);
                setNexturl(res.data.members.next_page_url);
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
                setNexturl(res.data.members.next_page_url);
                setmembersdata(membersdata.concat(...res.data.members.data) );
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
                    <div class="card-header my-card-head my-card-head-text">Pending Users</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Code</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>

                                <tbody>{membersdata.map(data => <PendingUsersTable  data={data} loadData={loadData} />)}</tbody>
                                <InfiniteScroll
                                    dataLength={membersdata.length}
                                    next={nextData}
                                    hasMore={membersdata.current_page === membersdata.last_page ? true : false}
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

export default PendingUsers;
