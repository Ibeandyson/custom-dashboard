import './Styles/AddUser.css'

const UserForm = () => {
    return (
        <div>
            <div class="pt-5">
                <div class="card my-card-look">
                    <div class="card-header my-card-head my-card-head-text">Add A Member</div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">First name</p>
                                <input class="form-control form-control-sm " type="text" placeholder="first name" />
                            </div>
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">Last name</p>
                                <input class="form-control form-control-sm " type="text" placeholder="last name" />
                            </div>
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">Others</p>
                                <input class="form-control form-control-sm " type="text" placeholder="other names" />
                            </div>
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">Email</p>
                                <input class="form-control form-control-sm " type="email" placeholder="email" />
                            </div>
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">Phone number</p>
                                <input class="form-control form-control-sm " type="text" placeholder="phone number" />
                            </div>
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">Date</p>
                                <input class="form-control form-control-sm " type="date" />
                            </div>
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">Address 1</p>
                                <input
                                    class="form-control form-control-sm "
                                    type="text"
                                    placeholder="Eg 123 lagos close"
                                />
                            </div>
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">Address 2 optional</p>
                                <input
                                    class="form-control form-control-sm "
                                    type="text"
                                    placeholder="Eg 123 lagos close"
                                />
                            </div>
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">Country</p>
                                <select class="form-control form-control-sm">
                                    <option>Select Country</option>
                                </select>
                            </div>
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">State</p>
                                <select class="form-control form-control-sm">
                                    <option>Selet State</option>
                                </select>
                            </div>
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">LGA</p>
                                <select class="form-control form-control-sm">
                                    <option>Select LGA</option>
                                </select>
                            </div>
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">City</p>
                                <select class="form-control form-control-sm">
                                    <option>Select City</option>
                                </select>
                            </div>
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">Password</p>
                                <input class="form-control form-control-sm " type="PassWord" placeholder="Enter Password" />
                            </div>

                            <div class="col-xs-12 col-md-12 pt-3">
                                <div class="pt-3">
                                    <p class="card-body-head-text">Woker Information</p>
                                </div>
                                <p class="my-membarship-signup-text">Are you employed?</p>
                                <div style={{display: "flex"}}>
                                    <div class="ml-5">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="gridRadios"
                                            id="gridRadios3"
                                            value="option3"
                                        />
                                        <label class="form-check-label" style={{fontSize: "0.7em"}} for="gridRadios3">
                                            YES
                                        </label>
                                    </div>
                                    <div class="ml-5">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="gridRadios"
                                            id="gridRadios3"
                                            value="option3"
                                        />
                                        <label class="form-check-label" style={{fontSize: "0.7em"}} for="gridRadios3">
                                            NO
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">Type of Employment</p>
                                <select class="form-control form-control-sm">
                                    <option>Select</option>
                                </select>
                            </div>

                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">Type of ID</p>
                                <select class="form-control form-control-sm">
                                    <option>Select ID type</option>
                                </select>
                            </div>
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">upload ID</p>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                            </div>
                            <div class="col-xs-12 col-md-4 pt-3">
                                <p class="my-membarship-signup-text">Upload Profile Image</p>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                            </div>
                        </div>
                        <div class="pt-5 pb-5">
                            <div style={{float: "right"}}>
                                <button type="button" class="btn btn-success">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
