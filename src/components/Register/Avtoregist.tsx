import React from 'react'
import { FaFacebookF, FaGoogle, FaLock, FaUser } from 'react-icons/fa'
import './Register.scss'

const Avtoregist: React.FC = () => {
	return (
		<div id='register'>
			<div className='container'>
				<div className='register'>
					<div className='register_welcome'>
						<h1>Welcome</h1>
						<h5>We are glad to see you back with us</h5>
					</div>
					<div className='register_user'>
						<div className='input-container'>
							<FaUser className='icon' />
							<input type='text' placeholder='Username' />
						</div>
						<div className='input-container'>
							<FaLock className='icon' />
							<input type='password' placeholder='Password' />
						</div>
						<div className='create_regist'>
							<button>NEXT</button>
						</div>
						<div className='register_login'>
							<h4>Login with Others</h4>
							<div className='login-buttons'>
								<button className='google'>
									<FaGoogle className='icon' />
									Login with Google
								</button>
								<button className='facebook'>
									<FaFacebookF className='icon' />
									Login with Facebook
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Avtoregist
