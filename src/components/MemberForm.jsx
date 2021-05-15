import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import url from "../url";
import Preloader from "../Preloader";

const MemberForm = () => {
  //======USER GLOBAL STATE FROM REDUX
  const userSignin = useSelector((state) => state.userSignin);
  const { user } = userSignin;

  const [formDetail, setFormDetail] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    phone: "",
    dob: "",
    address1: "",
    address2: "",
    state_code: "",
    lga_id: "",
    profile_image: null,
    employment_status: "",
    identification_image: null,
    identification_type: "",
  });
  const [stateList, setStateList] = useState([]);
  const [lgaList, setLgaList] = useState([]);
  const [sortedLgaList, setSortedLgaList] = useState([]);
  const [loading, setLoading] = useState(false);

  const prepareFormData = (object) =>
    Object.keys(object).reduce((formData, key) => {
      object[key] && formData.append(key, object[key]);
      return formData;
    }, new FormData());

  const saveNewMember = () => {
    setLoading(true);
    axios
      .post(`${url}/api/admin/member/new`, prepareFormData(formDetail), {
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loadStateList = () => {
    setLoading(true);
    axios
      .get(`${url}/api/state/list`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setStateList(res.data.states);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const loadLgaList = () => {
    setLoading(true);
    axios
      .get(`${url}/api/lga/list`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setLgaList(res.data.lgas);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadLgaList();
    loadStateList();
  }, []);

  const filterLgaByState = () => {
    return [...lgaList.filter((x) => x.state_code === formDetail.state_code)];
  };

  const handleFormInputChange = (e) => {
    setFormDetail({ ...formDetail, [e.target.name]: e.target.value });
    if (e.target.name == "state_code") {
      setSortedLgaList(filterLgaByState());
    }
    console.log(formDetail);
  };

  const handleFormSelectChange = (e) => {
    setFormDetail({ ...formDetail, [e.target.name]: e.target.selected });
    console.log(formDetail);
  };

  return (
    <div>
      {loading && <Preloader />}
      <div class="pt-3">
        <div class="card my-card-look">
          <div class="card-header my-card-head my-card-head-text">Overview</div>
          <div class="card-body">
            <div class="row">
              <div class="col-xs-12 col-md-4 pt-3">
                <p class="my-membarship-signup-text">First name</p>
                <input
                  class="form-control form-control-sm "
                  type="text"
                  placeholder="first name"
                  name="first_name"
                  value={formDetail.first_name}
                  onChange={handleFormInputChange}
                />
              </div>
              <div class="col-xs-12 col-md-4 pt-3">
                <p class="my-membarship-signup-text">Last name</p>
                <input
                  class="form-control form-control-sm "
                  type="text"
                  placeholder="last name"
                  name="last_name"
                  value={formDetail.last_name}
                  onChange={handleFormInputChange}
                />
              </div>
              <div class="col-xs-12 col-md-4 pt-3">
                <p class="my-membarship-signup-text">Others</p>
                <input
                  class="form-control form-control-sm "
                  type="text"
                  placeholder="other names"
                  name="middle_name"
                  value={formDetail.middle_name}
                  onChange={handleFormInputChange}
                />
              </div>
              <div class="col-xs-12 col-md-4 pt-3">
                <p class="my-membarship-signup-text">Email</p>
                <input
                  class="form-control form-control-sm "
                  type="email"
                  placeholder="email"
                  name="email"
                  value={formDetail.email}
                  onChange={handleFormInputChange}
                />
              </div>
              <div class="col-xs-12 col-md-4 pt-3">
                <p class="my-membarship-signup-text">Phone number</p>
                <input
                  class="form-control form-control-sm "
                  type="text"
                  placeholder="phone number"
                  name="phone"
                  value={formDetail.phone}
                  onChange={handleFormInputChange}
                />
              </div>
              <div class="col-xs-12 col-md-4 pt-3">
                <p class="my-membarship-signup-text">Date</p>
                <input
                  class="form-control form-control-sm "
                  type="date"
                  name="dob"
                  max="2005-01-01"
                  value={formDetail.dob}
                  onChange={handleFormInputChange}
                />
              </div>
              <div class="col-xs-12 col-md-4 pt-3">
                <p class="my-membarship-signup-text">Address 1</p>
                <input
                  class="form-control form-control-sm "
                  type="text"
                  placeholder="Eg 123 lagos close"
                  name="address1"
                  value={formDetail.address1}
                  onChange={handleFormInputChange}
                />
              </div>
              <div class="col-xs-12 col-md-4 pt-3">
                <p class="my-membarship-signup-text">Address 2 optional</p>
                <input
                  class="form-control form-control-sm "
                  type="text"
                  placeholder="Eg 123 lagos close"
                  name="address2"
                  value={formDetail.address2}
                  onChange={handleFormInputChange}
                />
              </div>
              <div class="col-xs-12 col-md-4 pt-3">
                <p class="my-membarship-signup-text">State</p>
                <select
                  class="form-control form-control-sm"
                  name="state_code"
                  value={formDetail.state_code}
                  onChange={handleFormInputChange}
                >
                  <option value="">Select State</option>
                  {stateList.map((x) => (
                    <option value={x.code} key={x.code}>
                      {x.name}
                    </option>
                  ))}
                </select>
              </div>
              <div class="col-xs-12 col-md-4 pt-3">
                <p class="my-membarship-signup-text">LGA</p>
                <select
                  class="form-control form-control-sm"
                  name="lga_id"
                  value={formDetail.lga_id}
                  onChange={handleFormInputChange}
                >
                  <option value="">Select LGA</option>
                  {sortedLgaList.map((x) => (
                    <option value={x.id} key={x.id}>
                      {x.name}
                    </option>
                  ))}
                </select>
              </div>
              <div class="col-xs-12 col-md-4 pt-3">
                <p class="my-membarship-signup-text">Employment Status</p>
                <select
                  class="form-control form-control-sm"
                  name="employment_status"
                  value={formDetail.employment_status}
                  onChange={handleFormInputChange}
                >
                  <option value="">Select Employment Status</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="employee">Employee</option>
                  <option value="self-employed">Self Employed</option>
                  <option value="worker">Worker</option>
                </select>
              </div>

              <div class="col-xs-12 col-md-4 pt-3">
                <p class="my-membarship-signup-text">Type of ID</p>
                <select
                  class="form-control form-control-sm"
                  name="identification_type"
                  value={formDetail.identification_type}
                  onChange={handleFormInputChange}
                >
                  <option value="">Select ID type</option>
                  <option value="international-passport">
                    International Passport
                  </option>
                  <option value="national-id">National ID</option>
                  <option value="driver-license">Driver License</option>
                  <option value="permanent-voter-card">
                    Permanent Voter Card
                  </option>
                </select>
              </div>
              <div class="col-xs-12 col-md-4 pt-3">
                <p class="my-membarship-signup-text">Upload ID (5MB Max Size)</p>
                <input
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                  name="identification_image"
                  value={formDetail.identification_image}
                  onChange={handleFormSelectChange}
                />
              </div>
              <div class="col-xs-12 col-md-4 pt-3">
                <p class="my-membarship-signup-text">Upload Profile Image (5MB Max Size)</p>
                <input
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                  name="profile_image"
                  value={formDetail.profile_image}
                  onChange={handleFormInputChange}
                />
              </div>
            </div>
            <div class="pt-5 pb-5">
              <div>
                <button
                  type="button"
                  onClick={saveNewMember}
                  class="btn btn-success"
                >
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
export default MemberForm;
