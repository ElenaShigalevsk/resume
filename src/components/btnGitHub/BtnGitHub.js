import gitHubIcon from './gitHub-black.svg';
import "./style.css"

const BtnGitHub = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer nofollow" className="btn-outline">
			{/*<img src={gitHubIcon} alt="" />*/}
			Project link
		</a>
	);
};

export default BtnGitHub;