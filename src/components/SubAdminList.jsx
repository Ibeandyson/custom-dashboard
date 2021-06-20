import { useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useSelector } from "react-redux";
import Preloader from "../Preloader";
import url from "../url";
import Moment from "react-moment";

const NewSubAdminStatusButton = ({ status, admin_id, label, action }) => {
  return (
    <button
      onClick={() => action(admin_id, status)}
      style={{ fontSize: "0.9em" }}
      type="button"
      class="btn btn-secondary btn-sm"
    >
      {label}
    </button>
  );
};

const SubAdminList = () => {
  const [loading, setLoading] = useState(false);
  const [subAdminData, setSubAdminData] = useState([]);
  const [nexturl, setNexturl] = useState("");
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);

  //======USER GLOBAL STATE FROM REDUX
  const userSignin = useSelector((state) => state.userSignin);
  const { user } = userSignin;

  const isSuperAdminCheck = () => {
    setLoading(true);
    axios
      .get(`${url}/api/admin/is-super-admin`, {
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setIsSuperAdmin(res.data.is_super_admin);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const toggleStatus = (admin_id, status) => {
    setLoading(true);
    axios
      .get(`${url}/api/admin/account/${admin_id}/set-status/${status}`, {
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        loadData();
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const loadData = () => {
    setLoading(true);
    axios
      .get(`${url}/api/admin/account/list`, {
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setSubAdminData(res.data.admins.data);
        setNexturl(res.data.admins.next_page_url);
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
        setNexturl(res.data.admins.next_page_url);
        setSubAdminData(subAdminData.concat(...res.data.admins.data));
      });
  };

  useEffect(() => {
    loadData();
    isSuperAdminCheck();
  }, []);
  return (
    <div>
      {loading && <Preloader />}
      <div class="pt-5">
        <div class="card my-card-look">
          <div class="card-header my-card-head my-card-head-text">
            Sub Admins
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created At</th>
                    {isSuperAdmin && <th scope="col">Action</th>}
                  </tr>
                </thead>

                <tbody>
                  {subAdminData.map((data) => (
                    <tr>
                      <td style={{ fontSize: "0.7em" }}>
                        {data.first_name} {data.last_name}
                      </td>
                      <td style={{ fontSize: "0.7em" }}>{data.status}</td>
                      <td style={{ fontSize: "0.7em" }}>
                        <Moment format="YYYY/MM/DD">{data.created_at}</Moment>
                      </td>
                      {isSuperAdmin && (
                        <td style={{ fontSize: "0.7em" }}>
                          <div
                            class="btn-group mr-2"
                            role="group"
                            aria-label="First group"
                          >
                            {data.status !== "enabled" && (
                              <NewSubAdminStatusButton
                                action={toggleStatus}
                                status="enabled"
                                admin_id={data.id}
                                label="Enable"
                              />
                            )}
                            {data.status !== "disabled" && (
                              <NewSubAdminStatusButton
                                action={toggleStatus}
                                status="disabled"
                                admin_id={data.id}
                                label="Disable"
                              />
                            )}
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
                <InfiniteScroll
                  dataLength={subAdminData.length}
                  next={nextData}
                  hasMore={
                    subAdminData.current_page === subAdminData.last_page
                      ? true
                      : false
                  }
                  endMessage={<p style={{ textAlign: "center" }} />}
                />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubAdminList;
