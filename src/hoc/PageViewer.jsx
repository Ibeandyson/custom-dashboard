import {useState, useEffect} from 'react';
import {DashBoardPage, AddUser, ActiveInvestmentPage, CompletedInvestmentPage, WithdrawPage, ActiveUsersPage} from '../pages/index';
import PrivateRoute from '../PrivateRoute';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Page404 from "../404"

const PageViewer = () => {
    return (
        <div className="container-fluid mt-5">
            <Router>
                <Switch>
                    <PrivateRoute exact  path="/admin_dashboard/dashboard_overview" component={DashBoardPage}/>
                    <PrivateRoute exact path="/admin_dashboard/add_user" component={AddUser}/>
                    <PrivateRoute exact path="/admin_dashboard/active_investment" component={ActiveInvestmentPage}/>
                    <PrivateRoute exact path="/admin_dashboard/completed_investment" component={CompletedInvestmentPage}/>
                    <PrivateRoute exact path="/admin_dashboard/withdraw" component={WithdrawPage}/>
                    <PrivateRoute exact path="/admin_dashboard/active_users" component={ActiveUsersPage}/>
                    <Route component={Page404} />
                </Switch>
            </Router>
        </div>
    );
};
export default PageViewer;
