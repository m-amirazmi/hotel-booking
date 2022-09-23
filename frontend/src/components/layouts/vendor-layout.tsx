import { Outlet } from 'react-router-dom';

export const VendorLayout: React.FC = () => {
	return (
		<main>
			<Outlet />
		</main>
	);
};
