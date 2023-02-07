// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Login from './Login';
// import Dashboard from './Dashboard';

// const App: React.FC = () => (
//   <Router>
//     <Switch>
//       <Route exact path="/" component={Login} />
//       <Route path="/dashboard" component={Dashboard} />
//     </Switch>
//   </Router>
// );

// ReactDOM.render(<App />, document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<App/>
		</React.StrictMode>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
