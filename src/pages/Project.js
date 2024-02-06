import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {projects} from "./../helpers/projectsList"

const Project = () => {
	const {link} = useParams();
	const project = projects.find((p) => p.link === link);

    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{project.title}</h1>
					<div className="project-details__desc">
						<div className="project-details__desc-title">Technologies used:</div>
						<div className="project-details__desc-text">
							{project.skills}
						</div>
					</div>
					<img
						src={project.imgBig}
						alt={project.title}
						className="project-details__cover"
					/>

					{project.gitHubLink && (
						<BtnGitHub link={project.gitHubLink}/>
					)}

				</div>
			</div>
		</main>
	);
}

export default Project;