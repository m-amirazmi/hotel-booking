import React from 'react';
import { IAuthRoleModalProps } from '../../utils/interfaces';

export const AuthRoleModal: React.FC<IAuthRoleModalProps> = ({ roles, handleRole }) => {
	return (
		<div className="absolute w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
			<div className="p-8 bg-white flex flex-col items-center justify-center rounded">
				<h2 className="text-xl mb-4 text-gray-700">Log in as:</h2>
				<div className="text-center flex flex-col gap-4">
					{roles.map((role: string) => (
						<button
							key={role}
							className="border-blue-800 border w-full px-12 py-2 text-blue-800 hover:bg-blue-800 hover:text-white transition-all rounded"
							name={role}
							onClick={() => handleRole(role)}
						>
							{role}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
