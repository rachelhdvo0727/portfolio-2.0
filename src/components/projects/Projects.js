import styles from './Projects.module.scss';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import ProjectBtn from '../project-btn/ProjectBtn';
import LoadingSkeleton from '../loading-skeleton/LoadingSkeleton';

function Projects() {
	const [projects, setProjects] = useState([]);
	const history = useHistory();
	// GET projects
	useEffect(() => {
		axios
			.get('../../db/projects.json')
			.catch((error) => console.error(error))
			.then((data) => {
				setInterval(() => {
					setProjects(data.data);
				}, 800);
			});
	}, []);

	const clickOneProject = (thisproject, i, e) => {
		e.currentTarget.classList.toggle('pressed');

		if (e.currentTarget.classList.contains('pressed')) {
			setTimeout(() => {
				history.push(`/project/${thisproject._id}`, {
					project: thisproject
				});
			}, 500);
		}
	};

	const isSmallestScreen = useMediaQuery({ query: '(max-width: 340px)' });
	return (
		<main className={styles.projectsPage + ' fadeIn'}>
			<h1 className={isSmallestScreen ? 'display-2 ' : 'display-1 '}>
				Work & Projects
			</h1>
			<section className={styles.textWrapper}>
				<h2 className='display-3'>Client Work as Consultant</h2>
				<div className={styles.textContainer}>
					<p>
						Since 2021, I’ve worked as a front-end consultant on a range
						of enterprise and public-sector websites, focusing on:
					</p>
					<ul className={styles.list}>
						<li>Accessibility audits and WCAG 2.1 AA remediation</li>
						<li>Design system integration and refactoring</li>
						<li>
							Frontend architecture using React, TypeScript, SASS/SCSS
							and Tailwind CSS
						</li>
						<li>
							Performance optimization and collaboration with
							cross-functional teams
						</li>
					</ul>
				</div>
			</section>
			<section className={styles.textWrapper}>
				<h2 className='display-3'>Learning & Experiments</h2>
				<div className={styles.textContainer}>
					<p>
						While client work keeps me busy, I’m exploring and learning in
						my spare time. I have earned IAAP CPACC certificate in
						aceessibility and working on mobile development, which I
						regularly test new ideas, which I document in small GitHub
						repositories.
					</p>
					<h3>Certificate</h3>
					<ul>
						<li>
							<a href='https://www.codecademy.com/profiles/giga0775630017/certificates/458aef4eef5f5130685423fc15e6493d'>
								Learn React Native Course - Codecademy
							</a>
						</li>
						<li>
							<a href='https://www.credly.com/badges/7f21107d-8767-400c-bd9f-d2d133eb7ff2/linked_in_profile'>
								Licenser og certificeringer IAAP - International
								Association of Accessibility Professionals
							</a>
						</li>
					</ul>
				</div>
			</section>
			<section className={styles.textWrapper}>
				<h2 className='display-3'>School projects</h2>
				<div className={styles.allProjectsWrapper}>
					{(projects.length > 0 || projects) &&
						projects.map((project, i) => (
							<ProjectBtn
								key={i}
								projectName={project.projectName}
								projectImg={
									'../../images/' +
									project.projectThumbnail[0] +
									'.jpg'
								}
								onClick={(e) => {
									clickOneProject(project, i, e);
								}}
							/>
						))}
					{(projects.length <= 0 || !projects) && <LoadingSkeleton />}
				</div>
			</section>
		</main>
	);
}
export default Projects;
