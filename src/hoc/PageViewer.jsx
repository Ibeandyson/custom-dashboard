import {useState, useEffect} from 'react';
import {DashBoardPage, AddUser, ActiveInvestmentPage, CompletedInvestmentPage, WithdrawPage} from '../pages/index';

const PageViewer = () => {
    return (
        <div className="container-fluid mt-5">
            {/* <DashBoardPage /> */}
            {/* <AddUser /> */}
            {/* <ActiveInvestmentPage/> */}
            {/* <CompletedInvestmentPage/> */}
            <WithdrawPage/>
        </div>
    );
};
export default PageViewer;
