import React from 'react';
import { IAuthInputProps } from '../../utils/interfaces';

export const AuthInput: React.FC<IAuthInputProps> = ({ type = 'text', name, placeholder }) => {
	return (
		<div className="flex flex-col gap-1 text-center">
			<label htmlFor={name.toLowerCase()}>{name}</label>
			<input
				id={name.toLowerCase()}
				className="rounded text-center p-2 focus:outline-none border hover:border-blue-800 hover:border-opacity-50 focus:border-opacity-100 focus:border-blue-800"
				type={type}
				name={name.toLowerCase()}
				placeholder={placeholder}
			/>
		</div>
	);
};
