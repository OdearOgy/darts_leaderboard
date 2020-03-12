import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

ReactDOM.createRoot(document.getElementById('root')).render(
	<CookiesProvider>
		<Router>
			<App />
		</Router>
	</CookiesProvider>
);
