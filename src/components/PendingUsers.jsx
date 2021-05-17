import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useSelector } from "react-redux";
import Preloader from "../Preloader";
import url from "../url";
import Moment from "react-moment";
const PendingUsers = () => {
  const [loading, setLoading] = useState(false);
  const [membersdata, setmembersdata] = useState([]);
  const [nexturl, setNexturl] = useState("");
  const [modal, setmodal] = useState({});
  const [datacode, setdatacode] = useState("");

  //======USER GLOBAL STATE FROM REDUX
  const userSignin = useSelector((state) => state.userSignin);
  const { user } = userSignin;

  const loadData = () => {
    setLoading(true);
    axios
      .get(`${url}/api/admin/member/list/pending`, {
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setmembersdata(res.data.members.data);
        setNexturl(res.data.members.next_page_url);
        console.log("data", res);
        setLoading(false);
      })
      .catch((error) => {
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
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setNexturl(res.data.members.next_page_url);
        setmembersdata(membersdata.concat(...res.data.members.data));
      });
  };

  // ===========Approved==========
  const approveFun = () => {
    setLoading(true);
    axios
      .post(
        `${url}/api/admin/member/update`,
        {
          user_code: datacode,
          status: "approved",
        },
        {
          headers: {
            Authorization: `Bearer ${user}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        loadData();
      });
  };

  // ===========Declined==========
  const declinedFun = () => {
    setLoading(true);
    axios
      .post(
        `${url}/api/admin/member/update`,
        {
          user_code: datacode,
          status: "declined",
        },
        {
          headers: {
            Authorization: `Bearer ${user}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        loadData();
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
          <div class="card-header my-card-head my-card-head-text">
            Pending Users
          </div>
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

                <tbody>
                  {membersdata.map((data) => (
                    <tr>
                      <td style={{ fontSize: "0.7em" }}>{data.code}</td>
                      <td style={{ fontSize: "0.7em" }}>
                        {data.first_name} {data.last_name} {data.midlde_name}
                      </td>
                      <td style={{ fontSize: "0.7em" }}>{data.status}</td>
                      <td style={{ fontSize: "0.7em" }}>
                        <Moment format="YYYY/MM/DD">{data.created_at}</Moment>
                      </td>
                      <td style={{ fontSize: "0.7em" }}>
                        <div
                          class="btn-group mr-2"
                          role="group"
                          aria-label="First group"
                        >
                          <button
                            onClick={() => setmodal(data)}
                            style={{ fontSize: "0.9em" }}
                            type="button"
                            class="btn btn-secondary btn-sm"
                            data-toggle="modal"
                            data-target="#user"
                          >
                            User
                          </button>
                          <button
                            onClick={() => setdatacode(data.code)}
                            style={{ fontSize: "0.9em" }}
                            type="button"
                            class="btn btn-success btn-sm"
                            data-toggle="modal"
                            data-target="#approve"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => setdatacode(data.code)}
                            style={{ fontSize: "0.9em" }}
                            type="button"
                            class="btn btn-danger btn-sm"
                            data-toggle="modal"
                            data-target="#failed"
                          >
                            Decline
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <InfiniteScroll
                  dataLength={membersdata.length}
                  next={nextData}
                  hasMore={
                    membersdata.current_page === membersdata.last_page
                      ? true
                      : false
                  }
                  endMessage={<p style={{ textAlign: "center" }} />}
                />
              </table>
              {/* =======  View users modal ======= */}
              <div
                style={{ zIndex: "500000" }}
                class="modal fade"
                id="user"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">
                        User
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div className="text-center">
                        <img
                          src={
                            modal.profile_image === null
                              ? "https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
                              : modal.profile_image
                          }
                          style={{
                            height: "60px",
                            width: "60px",
                            borderRadius: "50px",
                          }}
                        />
                      </div>
                      <hr />
                      <div>
                        <span
                          style={{ fontSize: "0.7em", fontWeight: "bold" }}
                          className="mr-3"
                        >
                          Name:
                        </span>
                        <span style={{ fontSize: "0.7em" }} className="">
                          {modal.first_name} {modal.last_name}{" "}
                          {modal.middle_name}
                        </span>
                      </div>
                      <hr />
                      <div>
                        <span
                          style={{ fontSize: "0.7em", fontWeight: "bold" }}
                          className="mr-3"
                        >
                          Email:
                        </span>
                        <span style={{ fontSize: "0.7em" }} className="">
                          {modal.email}
                        </span>
                      </div>
                      <hr />
                      <div>
                        <span
                          style={{ fontSize: "0.7em", fontWeight: "bold" }}
                          className="mr-3"
                        >
                          DOB:
                        </span>
                        <span style={{ fontSize: "0.7em" }} className="">
                          {modal.DOB}
                        </span>
                      </div>
                      <hr />
                      <div>
                        <span
                          style={{ fontSize: "0.7em", fontWeight: "bold" }}
                          className="mr-3"
                        >
                          Address1:
                        </span>
                        <span style={{ fontSize: "0.7em" }} className="">
                          {modal.address1}
                        </span>
                      </div>
                      <hr />
                      <div>
                        <span
                          style={{ fontSize: "0.7em", fontWeight: "bold" }}
                          className="mr-3"
                        >
                          Address2:
                        </span>
                        <span style={{ fontSize: "0.7em" }} className="">
                          {modal.address2}
                        </span>
                      </div>
                      <hr />
                      <div>
                        <span
                          style={{ fontSize: "0.7em", fontWeight: "bold" }}
                          className="mr-3"
                        >
                          Gender:
                        </span>
                        <span style={{ fontSize: "0.7em" }} className="">
                          {modal.gender}
                        </span>
                      </div>
                      <hr />
                      <div>
                        <span
                          style={{ fontSize: "0.7em", fontWeight: "bold" }}
                          className="mr-3"
                        >
                          Phone:
                        </span>
                        <span style={{ fontSize: "0.7em" }} className="">
                          {modal.phone}
                        </span>
                      </div>
                      <hr />
                      <div>
                        <span
                          style={{ fontSize: "0.7em", fontWeight: "bold" }}
                          className="mr-3"
                        >
                          Available Balance:
                        </span>
                        <span style={{ fontSize: "0.7em" }} className="">
                          {modal.available_balance}
                        </span>
                      </div>
                      <hr />
                      <div>
                        <span
                          style={{ fontSize: "0.7em", fontWeight: "bold" }}
                          className="mr-3"
                        >
                          Employment Status:
                        </span>
                        <span style={{ fontSize: "0.7em" }} className="">
                          {modal.employment_status}
                        </span>
                      </div>
                      <hr />
                      <div>
                        <span
                          style={{ fontSize: "0.7em", fontWeight: "bold" }}
                          className="mr-3"
                        >
                          State:
                        </span>
                        <span style={{ fontSize: "0.7em" }} className="">
                          {modal.state_code}
                        </span>
                      </div>
                      <hr />
                      <div>
                        <span
                          style={{ fontSize: "0.7em", fontWeight: "bold" }}
                          className="mr-3"
                        >
                          State:
                        </span>
                        <span style={{ fontSize: "0.7em" }} className="">
                          {modal.state_code}
                        </span>
                      </div>
                      <hr />
                      <div>
                        <span
                          style={{ fontSize: "0.7em", fontWeight: "bold" }}
                          className="mr-3"
                        >
                          Identification Type:
                        </span>
                        <span style={{ fontSize: "0.7em" }} className="">
                          {modal.identification_type}
                        </span>
                      </div>
                      <hr />
                      <div className="text-center">
                        <p
                          style={{ fontSize: "0.7em", fontWeight: "bold" }}
                          className="mr-3"
                        >
                          Identification File:
                        </p>
                        <img
                          src={modal.identification_image}
                          style={{ height: "100%", width: "100%" }}
                        />
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              {/* =======  View users modal ======= */}
              {/* ========== Approve Modal ===== */}
              <div
                class="modal fade"
                id="approve"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      Do you want to approve this Member?
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-dismiss="modal"
                      >
                        No
                      </button>
                      <button
                        onClick={() => approveFun()}
                        type="button"
                        class="btn btn-success"
                        data-dismiss="modal"
                      >
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========== Approve Modal ===== */}
              {/* ========== Declined Modal ===== */}
              <div
                class="modal fade"
                id="failed"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      Do you want to Declined this Member?
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-dismiss="modal"
                      >
                        No
                      </button>
                      <button
                        onClick={() => declinedFun()}
                        type="button"
                        class="btn btn-success"
                        data-dismiss="modal"
                      >
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========== Declined Modal  ===== */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingUsers;
