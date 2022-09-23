import axios from 'axios';
import { API_AUTH } from '.';
import { ILogin } from '../utils/interfaces';

export const login = async (data: ILogin) => {
	const { data: response } = await axios.post(API_AUTH + 'login', data);
	return response;
};
