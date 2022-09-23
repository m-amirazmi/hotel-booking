import { useDispatch } from 'react-redux';
import { userRemove } from '../../redux/features/userSlice';

export const CustomerDashboard: React.FC = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(userRemove());
	};

	return (
		<div>
			<button onClick={handleLogout}>Logout Customer</button>
		</div>
	);
};
