import ChangePasswordForm from '../components/ChangePasswordForm';
import {SetPackage, Package} from '../components/index';
import NewAdminForm from '../components/NewAdminForm';

const ActiveUsersPage = () => {
    return (
        <div>
            <div>
              <SetPackage/>
            </div>
            <div>
              <NewAdminForm/>
            </div>
            <div>
              <ChangePasswordForm/>
            </div>
            <div>
              <Package />
            </div>
        </div>
    );
};

export default ActiveUsersPage;
