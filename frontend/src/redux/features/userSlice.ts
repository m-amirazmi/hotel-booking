import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../../utils/interfaces';

const initialState: IUserState = {
	loading: false,
	user: {
		_id: '',
		username: '',
		email: '',
		firstName: '',
		lastName: '',
		phone: '',
		image: '',
		address: '',
		hotels: [],
		booking: [],
		bookingHistory: [],
	},
	roles: [''],
	token: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		userPending: (state) => {
			state.loading = true;
			clearState(state);
		},
		userSet: (state, { payload }: PayloadAction<IUserState>) => {
			state.loading = false;
			state.user = payload.user;
			state.token = payload.token;
			state.roles = payload.roles;
		},
		userRemove: (state) => {
			state.loading = false;
			clearState(state);
		},
	},
});

export const { userPending, userRemove, userSet } = userSlice.actions;
export default userSlice.reducer;

const clearState = (state: IUserState) => {
	state.user = {
		_id: '',
		username: '',
		email: '',
		firstName: '',
		lastName: '',
		phone: '',
		image: '',
		address: '',
		hotels: [],
		booking: [],
		bookingHistory: [],
	};
	state.roles = [''];
	state.token = '';
};
