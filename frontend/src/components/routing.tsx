import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RootState } from '../redux/store';
import { routes, routingLayouts } from '../utils/routes';

export const Routing: React.FC = () => {
	// Got 4 different role + views

	const { roles, user, token } = useSelector((state: RootState) => state.user);

	return (
		<Routes>
			{routingLayouts.map((layout) => {
				return (
					<Route key={layout.path} path={layout.path} element={<layout.component />}>
						{routes.map((route) => {
							if (route.layout !== layout.layout) return null;

							let component = <route.component />;
							if (route.isProtected && !token) component = <Navigate to="/auth/login" />;
							if (route.isProtected && route.role && !roles.includes(route.role)) component = <Navigate to="/auth/login" />;

							return <Route key={route.path} path={route.path} element={component} />;
						})}
					</Route>
				);
			})}
		</Routes>
	);
};
