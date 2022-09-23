import { Outlet } from 'react-router-dom';

export const AdminLayout: React.FC = () => {
	return (
		<main>
			<Outlet />
		</main>
	);
};
