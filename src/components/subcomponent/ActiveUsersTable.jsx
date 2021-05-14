import {useState} from 'react';
const ActiveUsersTable = () => {
    return (
        <div>
            <div className="card my-card-look">
                <div className="card-header my-card-head my-card-head-text">Active Users</div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Code</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{fontSize: '0.7em'}}>140300</td>
                                    <td style={{fontSize: '0.7em'}}>Ibe Andyson</td>
                                    <td style={{fontSize: '0.7em'}}>ibe@gmail.com</td>
                                    <td style={{fontSize: '0.7em'}}>
                                        <div class="btn-group mr-2" role="group" aria-label="First group">
                                            <button type="button" class="btn btn-secondary btn-sm" data-toggle="modal" data-target="#exampleModalCenter">
                                                view
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* =======  View users modal ======= */}
            {/* <div
                class="modal fade"
                id="exampleModalCenter"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">
                                Modal title
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                            <button type="button" class="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* =======  View users modal ======= */}
        </div>
    );
};

export default ActiveUsersTable;
