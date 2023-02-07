import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../componets/userDashBoard/SideBar';
import TopNavBar from '../componets/userDashBoard/TopNavBar';
import '../styles/dashboard.scss';

interface Props {}

const DashboardLayout: FC<Props> = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className="dashboard-layout">
			<TopNavBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
			<div className='dashboard-container'>
				<SideBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

				<div className="dashboard">
					<div className='dashboard-main'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
export {}