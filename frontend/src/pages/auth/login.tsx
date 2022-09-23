import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';
import { userPending, userSet } from '../../redux/features/userSlice';
import { RootState } from '../../redux/store';

export const Login: React.FC = () => {
	const [roleSelected, setRoleSelected] = useState<string>('');

	const { roles } = useSelector((state: RootState) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { email, password } = e.currentTarget;

		dispatch(userPending());
		const { data } = await login({ email: email.value, password: password.value });

		await dispatch(userSet({ roles: data.roles, token: data.token, user: data.details }));

		if (data.roles.length > 1) {
			// alert('What role you want to choose?');
		}
	};

	return (
		<form onSubmit={handleLogin}>
			<input type="email" name="email" placeholder="eg: john@doe.com" />
			<input type="password" name="password" placeholder="eg: 123456" />
			<button type="submit">Login</button>
		</form>
	);
};
