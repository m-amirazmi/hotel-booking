import { Outlet } from 'react-router-dom';

export const CustomerLayout: React.FC = () => {
	return (
		<main>
			<Outlet />
		</main>
	);
};
