import LoginForm from '../login/LoginForm';
import '../../styles/login.scss'

const LoginPage = () => {
	return (
		<section className="login">
			<div className="login-container">
				<section className="login-images">
					<img src="/images/logo.svg" alt="logo" className="logo" />
					<div>
						<img src="/images/login-illus.svg" alt="illustration image" />
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