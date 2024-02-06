import "./style.css";

import instagram from './../../img/icons/instagram.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						{/*<li className="social__item">*/}
						{/*	<a href="#!">*/}
						{/*		<img src={gitHub} alt="Link" />*/}
						{/*	</a>*/}
						{/*</li>*/}
						<li className="social__item">
							<a href="https://www.linkedin.com/in/elena-shyhalevskaya-44360910a/">
								<img src={linkedIn} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© 2024 resume.dialen.com.ua</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;