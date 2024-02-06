import Project from '../components/project/Project';
import {projects} from "../helpers/projectsList"
import {useEffect, useState, useCallback} from "react";

const Projects = () => {
	const [selectedFilters, setSelectedFilters] = useState([]);
	const [filteredItems, setFilteredItems] = useState(projects);
	const filters = ['Wordpress', 'Frontend', 'Webflow'];

	const handleFilterButtonClick = useCallback((selectedCategory) => {
		if (selectedFilters.includes(selectedCategory)) {
			const newFilters = selectedFilters.filter((el) => el !== selectedCategory);
			setSelectedFilters(newFilters);
		} else {
			setSelectedFilters((prevFilters) => [...prevFilters, selectedCategory]);
		}
	}, [selectedFilters]);

	const filterItems = useCallback(() => {
		if (selectedFilters.length > 0) {
			const tempItems = projects.filter((item) =>
				selectedFilters.some((filter) => item.category.includes(filter))
			);
			setFilteredItems(tempItems);
		} else {
			setFilteredItems(projects);
		}
	}, [selectedFilters]);

	useEffect(() => {
		filterItems();
	}, [filterItems]);


	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Projects</h2>

				<div className="buttons-container">
					{filters.map((category, index) => (
						<button
							onClick={() => handleFilterButtonClick(category)}
							className={`button ${selectedFilters.includes(category) ? "active" : ""}`}
							key={`filters-${index}`}
						>
							{category}
						</button>
					))}
				</div>
				<div className="projects-container">
					<ul>
					{filteredItems.map((project, index) => (
						<Project
							key={project['link']}
							title={project['title']}
							img={project['img']}
							index={project['link']}
						/>
					))}
					</ul>
				</div>
			</div>
		</main>
	);
};

export default Projects;
