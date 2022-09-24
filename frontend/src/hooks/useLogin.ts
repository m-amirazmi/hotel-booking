import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { userPending, userSet } from '../redux/features/userSlice';
import { RootState } from '../redux/store';

export const useLogin = () => {
	const [show, setShow] = useState<boolean>(false);

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
			setShow(true);
			return;
		}

		navigate(`/${data.roles[0].toLowerCase()}`);
	};

	const handleRole = (role: string): void => navigate(`/${role.toLowerCase()}`);

	return { show, roles, handleLogin, handleRole };
};
