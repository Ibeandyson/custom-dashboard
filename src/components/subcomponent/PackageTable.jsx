import Moment from 'react-moment';
const PackageTable = props => {
    return (
        <tr>
            <td style={{fontSize: '0.7em'}}>{props.data.name}</td>
            <td style={{fontSize: '0.7em'}}>{props.data.duration}</td>
            <td style={{fontSize: '0.7em'}}>{props.data.roi_percent}</td>
            <td style={{fontSize: '0.7em'}}>{props.data.max_amount}</td>
            <td style={{fontSize: '0.7em'}}>{props.data.min_amount}</td>
            <td style={{fontSize: '0.7em'}}>
                {props.data.active === true ? (
                    <span class="badge badge-success">Active</span>
                ) : (
                    <span class="badge badge-danger">Inactive</span>
                )}
            </td>
            <td style={{fontSize: '0.7em'}}>
                <div class="btn-group mr-2" role="group" aria-label="First group">
                    <button
                        style={{fontSize: '0.9em'}}
                        type="button"
                        class="btn btn-secondary btn-sm"
                        data-toggle="modal"
                        data-target="#edit">
                        Edit
                    </button>
                </div>
            </td>
            {/* =======  View users modal ======= */}
            <div
                class="modal fade"
                id="edit"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">
                                Eidt Package
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body" />
                    </div>
                </div>
            </div>
            {/* =======  View users modal ======= */}
        </tr>
    );
};

export default PackageTable;
