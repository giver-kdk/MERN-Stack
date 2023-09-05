import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyStore from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// Provide the redux store to entire app
	<Provider store = {MyStore}>				
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);

reportWebVitals();
