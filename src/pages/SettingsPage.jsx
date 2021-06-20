import ChangePasswordForm from '../components/ChangePasswordForm';
import {SetPackage, Package} from '../components/index';

const ActiveUsersPage = () => {
    return (
        <div>
            <div>
              <SetPackage/>
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
