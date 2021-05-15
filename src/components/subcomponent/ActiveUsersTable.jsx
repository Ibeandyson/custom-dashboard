import {useState} from 'react';
import Moment from 'react-moment';
const ActiveUsersTable = (props) => {
    return (
        <tr>
        <td style={{fontSize: '0.7em'}}>{props.data.code}</td>
        <td style={{fontSize: '0.7em'}}>{props.data.first_name} {props.data.last_name} {props.data.midlde_name}</td>
        <td style={{fontSize: '0.7em'}}>{props.data.status}</td>
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
              <div style={{zIndex: "500000"}}
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
                            <div className="text-center">
                                <img
                                    src={props.data.profile_image === null ? "https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg": props.data.profile_image}
                                    style={{height: '60px', width: '60px', borderRadius: '50px'}}
                                />
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Name:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.first_name} {props.data.last_name} {props.data.middle_name}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Email:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.email}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    DOB:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.DOB}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Address1:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.address1}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Address2:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.address2}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Gender:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.gender}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Phone:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.phone}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Available Balance:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.available_balance}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Employment Status:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.employment_status}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    State:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.state_code}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    State:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.state_code}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Identification Type:
                                </span>
                                <span style={{fontSize: '0.7em'}} className="">
                                    {props.data.identification_type}
                                </span>
                            </div>
                            <hr />
                            <div className="text-center">
                                <p style={{fontSize: '0.7em', fontWeight: 'bold'}} className="mr-3">
                                    Identification File:
                                </p>
                                <img src={props.data.identification_image} style={{height: '100%', width: '100%'}} />
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

export default ActiveUsersTable;
