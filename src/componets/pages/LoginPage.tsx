// import React from 'react';
// // import { useHistory } from 'react-router-dom';
// import logoImage from './logo.png';
// import displayImage from './hero.png';
// import './loginPage.css'

// const LoginPage: React.FC = () => {
// //   const history = useHistory();

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     // Perform mock authentication
//     const email = (event.target as HTMLFormElement).value;
//     const password = (event.target as HTMLFormElement).value
//     if (email === 'fola@example.com' && password === 'password') {
//     //   history.push('/dashboard');
//     console.log('welcome to your dashbord folagbade')
//     }
//     else {
//         console.log('wrong password bro!')
//     }
//   };

//   return (
//     <div className="container">
//       <div className="left-section">
//         <div className='logo'>
//         <img src={logoImage} alt="Company logo" />
//         </div>
//         <div className="display-image">
//           <img src= {displayImage} alt="Display image" />
//         </div>
//       </div>
//       <div className="right-section">
//         <h1>Welcome!</h1>
//         <span>Enter details to login</span>
//         <form onSubmit={handleSubmit}>
//           <input type="email" name="email" placeholder="Email" required />
//           <input type="password" name="password" placeholder="Password" required />
//           <span>
//             Forgot password?
//           </span>
//           <button type="submit">Log in</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import LoginForm from '../login/LoginForm';
import '../../styles/login.scss'

const LoginPage = () => {
	return (
		<section className="login">
			<div className="login-container">
				<section className="login-images">
					<img src="/images/logo.svg" alt="logo" className="logo" />
					<div>
						<img src="/images/login-illus.svg" alt="illustration" />
					</div>
				</section>

				<section className="login-form">
					<img src="/images/logo.svg" alt="logo" className="logo" />

					<LoginForm />
				</section>
			</div>
		</section>
	);
};



export default LoginPage;
export {}