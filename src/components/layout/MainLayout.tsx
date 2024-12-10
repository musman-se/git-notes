import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="mx-32 my-8">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;