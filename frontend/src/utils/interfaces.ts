import React from 'react';

export interface IUserState {
	loading?: boolean;
	user: {
		_id: string;
		username: string;
		email: string;
		firstName: string;
		lastName: string;
		phone?: string;
		image?: string;
		address?: string;
		hotels?: [];
		booking?: [];
		bookingHistory?: [];
	};
	roles: [string];
	token: string;
}

export interface ILogin {
	email: string;
	password: string;
}

export interface IRouting {
	path: string;
	component: React.FC<{}>;
	isProtected?: boolean;
	role?: string;
	layout: string;
}

export interface IAuthInputProps {
	type: string;
	placeholder: string;
	name: string;
}

export interface IAuthRoleModalProps {
	roles: string[];
	handleRole: (role: string) => void;
}

export interface IAuthFormProps {
	type: string;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	children: React.ReactNode;
}
