import {ActiveUsersCount, PendingUsersCount, BlockedUsersCount, ActiveInvestmentCount, CompeletedInvestmentCount} from '../components/index';
const DashBoardPage = () => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-4 py-2 px-2">
                    <ActiveUsersCount />
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4  py-2 px-2">
                    <PendingUsersCount />
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4  py-2 px-2">
                    <BlockedUsersCount />
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4  py-2 px-2">
                    <ActiveInvestmentCount />
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4  py-2 px-2">
                    <CompeletedInvestmentCount/>
                </div>
            </div>
        </div>
    );
};
export default DashBoardPage;
