import {useEffect} from 'react';
export default function WecomePage(props) {
    useEffect(() => {
        props.history.push('/admin_dashboard/dashboard_overview');
    }, []);
    return <div />;
}
