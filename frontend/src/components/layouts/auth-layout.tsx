import { Outlet } from 'react-router-dom';

export const AuthLayout: React.FC = () => {
	return (
		<main>
			<Outlet />
		</main>
	);
};
