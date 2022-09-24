import React from 'react';
import { Link } from 'react-router-dom';
import { IAuthFormProps } from '../../utils/interfaces';

export const AuthForm: React.FC<IAuthFormProps> = ({ handleSubmit, type, children }) => {
	return (
		<div className="flex flex-col bg-white p-8 max-w-sm w-full rounded">
			<div className="text-center mb-4">
				<h1 className="text-2xl mb-2">Welcome</h1>
				<p className="text-gray-400 font-semibold">{type === 'login' ? 'LOGIN' : 'REGISTER'}</p>
			</div>

			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				{children}
				<button className="bg-blue-800 text-white uppercase py-2 px-4 rounded" type="submit">
					{type === 'login' ? 'Login' : 'Register'}
				</button>
			</form>
			<div className="mt-4 text-sm text-center">
				{type === 'login' ? (
					<>
						Do not have an account yet?{' '}
						<Link className="text-blue-700 underline" to="/auth/register">
							Register here.
						</Link>
					</>
				) : (
					<>
						Already have an account?{' '}
						<Link className="text-blue-700 underline" to="/auth/login">
							Login here.
						</Link>
					</>
				)}
			</div>
		</div>
	);
};
