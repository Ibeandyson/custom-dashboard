import Moment from 'react-moment';
const ActiveInvestmentTable = props => {
    return (
        <tr>
            <td style={{fontSize: '0.7em'}}>{props.data.code}</td>
            <td style={{fontSize: '0.7em'}}>{props.data.package_name}</td>
            <td style={{fontSize: '0.7em'}}>{props.data.roi}</td>
            <td style={{fontSize: '0.7em'}}>{props.data.amount}</td>
            <td style={{fontSize: '0.7em'}}>
                <Moment format="YYYY/MM/DD">{props.data.created_at}</Moment>
            </td>
        </tr>
    );
};

export default ActiveInvestmentTable;
