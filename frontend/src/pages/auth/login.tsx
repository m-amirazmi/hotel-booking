import { AuthForm } from '../../components/auth/auth-form';
import { AuthInput } from '../../components/auth/auth-input';
import { AuthRoleModal } from '../../components/auth/auth-role-modal';
import { useLogin } from '../../hooks/useLogin';

export const Login: React.FC = () => {
	const { show, roles, handleLogin, handleRole } = useLogin();

	return (
		<section className="relative bg-gradient-to-br from-blue-700 to-blue-400 w-screen h-screen flex items-center justify-center">
			<AuthForm type="login" handleSubmit={handleLogin}>
				<AuthInput name="Email" placeholder="eg: john@doe.com" type="email" />
				<AuthInput name="Password" placeholder="eg: 123456" type="password" />
			</AuthForm>
			{show && <AuthRoleModal roles={roles} handleRole={handleRole} />}
		</section>
	);
};
