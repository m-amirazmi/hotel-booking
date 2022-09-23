import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Routing } from './components/routing';
import { Login } from './pages/auth/login';
import { Register } from './pages/auth/register';
import { store } from './redux/store';

export const App: React.FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routing />
			</BrowserRouter>
		</Provider>
	);
};
