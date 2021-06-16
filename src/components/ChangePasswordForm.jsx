import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import url from "../url";
import Preloader from "../Preloader";
const formSchema = {
  current_password: "",
  new_password: "",
  new_password_confirmation: "",
};

const ChangePasswordForm = () => {
  //======USER GLOBAL STATE FROM REDUX
  const userSignin = useSelector((state) => state.userSignin);
  const { user } = userSignin;

  const [formDetail, setFormDetail] = useState(formSchema);
  const [loading, setLoading] = useState(false);
  const [errorBag, setErrorBag] = useState({});
  const [statusMessage, setStatusMessage] = useState({
    error: "",
    success: "",
  });

  const [isformFilled, setIsFormFilled] = useState(false);

  const prepareFormData = (object) =>
    Object.keys(object).reduce((formData, key) => {
      object[key] && formData.append(key, object[key]);
      return formData;
    }, new FormData());

  const updatePassword = () => {
    setLoading(true);
    axios
      .post(`${url}/api/admin/password-change`, prepareFormData(formDetail), {
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setStatusMessage({ success: res.data.message });
        setErrorBag({});
        setFormDetail(formSchema);
      })
      .catch((err) => {
        // console.log(err.response.status);
        if (err.response.status == 422) {
          setStatusMessage({ error: err.response.data.message });
          setErrorBag(err.response.data.errors);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleFormInputChange = (e) => {
    setFormDetail({ ...formDetail, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setIsFormFilled(() =>
      Object.values(formDetail).some((x) => x === null || x === "")
    );
  }, [formDetail]);

  return (
    <div>
      {loading && <Preloader />}
      <div class="pt-3">
        <form action="action" method="post" autoComplete="off">
          <div class="card my-card-look">
            <div class="card-header my-card-head my-card-head-text">
              Change your Password
            </div>
            <div class="card-body">
              <div class="row">
                <div className="col-12">
                  {statusMessage.success && (
                    <div
                      class="alert alert-success alert-dismissible fade show"
                      role="alert"
                    >
                      {statusMessage.success}
                      <button
                        type="button"
                        class="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  )}
                  {statusMessage.error && (
                    <div
                      class="alert alert-danger alert-dismissible fade show"
                      role="alert"
                    >
                      {statusMessage.error}
                      <button
                        type="button"
                        class="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  )}
                </div>
                <div class="col-xs-12 col-md-4 pt-3">
                  <p class="my-membarship-signup-text">Current Password</p>
                  <input
                    class="form-control form-control-sm "
                    type="password"
                    placeholder="Current password"
                    name="current_password"
                    value={formDetail.current_password}
                    onChange={handleFormInputChange}
                  />
                  {errorBag && <p class="text-danger">{errorBag.current_password}</p>}
                </div>
                <div class="col-xs-12 col-md-4 pt-3">
                  <p class="my-membarship-signup-text">New Password</p>
                  <input
                    class="form-control form-control-sm "
                    type="password"
                    placeholder="new password"
                    name="new_password"
                    value={formDetail.new_password}
                    onChange={handleFormInputChange}
                  />
                  {errorBag && <p class="text-danger">{errorBag.new_password}</p>}
                </div>
                <div class="col-xs-12 col-md-4 pt-3">
                  <p class="my-membarship-signup-text">Confirm New Password</p>
                  <input
                    class="form-control form-control-sm "
                    type="password"
                    placeholder="confirm new password"
                    name="new_password_confirmation"
                    value={formDetail.new_password_confirmation}
                    onChange={handleFormInputChange}
                  />
                  {errorBag && (
                    <p class="text-danger">{errorBag.new_password_confirmation}</p>
                  )}
                </div>
              </div>
              <div class="pt-5 pb-5">
                <div>
                  <button
                    type="button"
                    disabled={isformFilled}
                    onClick={updatePassword}
                    class="btn btn-success"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ChangePasswordForm;
