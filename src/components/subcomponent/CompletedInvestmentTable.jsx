import Moment from 'react-moment';
const ComletedInvestmentTable = props => {
    return (
        <tr>
            <td style={{fontSize: '0.7em'}}>{props.data.code}</td>
            <td style={{fontSize: '0.7em'}}>{props.data.package_name}</td>
            <td style={{fontSize: '0.7em'}}>{props.data.roi}</td>
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
        </tr>
    );
};

export default ComletedInvestmentTable;
