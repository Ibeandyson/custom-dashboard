import {
  DashBoardPage,
  ActiveInvestmentPage,
  CompletedInvestmentPage,
  PendingWithdrawPage,
  ActiveUsersPage,
  CompletedWithdrawalPage,
  FailedWithdralPage,
  CompletedDepositPage,
  FailedDepositPage,
  PendingUsersPage,
  DeclinedUsersPage,
  MemberFormPage,
  SettingsPage,
  SubAdminsPage,
} from "../pages/index";
import PrivateRoute from "../PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from "../404";
const PageViewer = () => {
  return (
    <div className="container-fluid mt-5">
      <Router>
        <Switch>
          <PrivateRoute
            path="/admin_dashboard/dashboard_overview"
            component={DashBoardPage}
          />
          <PrivateRoute
            exact
            path="/admin_dashboard/active_investment"
            component={ActiveInvestmentPage}
          />
          <PrivateRoute
            exact
            path="/admin_dashboard/completed_investment"
            component={CompletedInvestmentPage}
          />
          <PrivateRoute
            exact
            path="/admin_dashboard/pending_withdrawal"
            component={PendingWithdrawPage}
          />
          <PrivateRoute
            exact
            path="/admin_dashboard/completed_withdrawal"
            component={CompletedWithdrawalPage}
          />
          <PrivateRoute
            exact
            path="/admin_dashboard/failed_withdrawal"
            component={FailedWithdralPage}
          />
          <PrivateRoute
            exact
            path="/admin_dashboard/completed_deposit"
            component={CompletedDepositPage}
          />
          <PrivateRoute
            exact
            path="/admin_dashboard/failed_deposit"
            component={FailedDepositPage}
          />
          <PrivateRoute
            exact
            path="/admin_dashboard/pending_users"
            component={PendingUsersPage}
          />
          <PrivateRoute
            exact
            path="/admin_dashboard/declined_users"
            component={DeclinedUsersPage}
          />
          <PrivateRoute
            exact
            path="/admin_dashboard/member_form"
            component={MemberFormPage}
          />

          <PrivateRoute
            exact
            path="/admin_dashboard/active_users"
            component={ActiveUsersPage}
          />
          <PrivateRoute
            exact
            path="/admin_dashboard/sub_admins"
            component={SubAdminsPage}
          />
          <PrivateRoute
            exact
            path="/admin_dashboard/settings"
            component={SettingsPage}
          />
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
};
export default PageViewer;
