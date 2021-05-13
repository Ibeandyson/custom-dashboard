import {Link} from 'react-router-dom';
const Page404 = () => {
    return (
        <div>
            <div className="container pt-5 text-center" style={{ marginTop: '5%'}}>
                <h1 style={{fontWeight: 'bolder', fontSize: "10em"}}>404</h1>
                <h6 className="pb-5">Page Not Found</h6>
                <Link to="/">
                    <button type="button" className="btn btn-success">
                        Go Back 
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Page404;
