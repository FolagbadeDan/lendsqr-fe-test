
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './applicationLayout/DashboardLayout';
import LoginPage from './componets/pages/LoginPage';
import UserDetails from './componets/pages/userDetails';
import Users from './componets/pages/Users';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<LoginPage/>} />
				<Route path="/loginPage" element={<LoginPage />} />

				<Route path="/dashboard/*" element={<DashboardLayout />}>
					<Route index element={<Users />} />
					<Route index path="users" element={<Users />} />
					<Route path="users/:id" element={<UserDetails/>} />
				</Route>

				<Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
			</Routes>
		</div>
	);
}

export default App;
