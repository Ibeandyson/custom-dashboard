import {useState, useEffect} from 'react';

const PageViewer = () => {
  const { height} = useWindowDimensions();
    return (
        <div>
            <p>This is page viewer</p>
        </div>
    );
};
export default PageViewer;



function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};
