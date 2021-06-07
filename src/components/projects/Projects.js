import styles from "./Projects.module.scss";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import ProjectBtn from "../project-btn/ProjectBtn";
import LoadingSkeleton from "../loading-skeleton/LoadingSkeleton";

function Projects() {
	const [projects, setProjects] = useState([]);
	const history = useHistory();
	// GET projects
	useEffect(() => {
		axios
			.get("../../db/projects.json")
			.catch((error) => console.error(error))
			.then((data) => {
				setInterval(() => {
					setProjects(data.data);
				}, 800);
			});
	}, []);

	const clickOneProject = (thisproject, i, e) => {
		e.currentTarget.classList.toggle("pressed");

		if (e.currentTarget.classList.contains("pressed")) {
			setTimeout(() => {
				history.push(`/project/${thisproject._id}`, { project: thisproject });
			}, 500);
		}
	};

	const isSmallestScreen = useMediaQuery({ query: "(max-width: 340px)" });
	return (
		<main className={styles.projectsPage + " fadeIn"}>
			<h1 className={isSmallestScreen ? "display-2 " : "display-1 "}>
				Projects
			</h1>
			<section className={styles.allProjectsWrapper}>
				{(projects.length > 0 || projects) &&
					projects.map((project, i) => (
						<ProjectBtn
							key={i}
							projectName={project.projectName}
							projectImg={
								"../../images/" + project.projectThumbnail[0] + ".jpg"
							}
							onClick={(e) => {
								clickOneProject(project, i, e);
							}}
						/>
					))}
				{(projects.length <= 0 || !projects) && <LoadingSkeleton />}
			</section>
		</main>
	);
}
export default Projects;
