import styles from "./OneProject.module.scss";

import { Link, useLocation } from "react-router-dom";
import Moment from "react-moment";
import Document from "../document/Document";

function OneProject() {
	const location = useLocation();
	const thisProject = location.state.project; // data received from projects component

	return (
		<Document
			title={
				<ul className={styles.breadscrumb}>
					<li>
						<Link to='/projects' children='Projects'></Link>
					</li>
					<li>
						<Link
							to={"/project/" + thisProject._id}
							children={thisProject.projectName}
						></Link>
					</li>
				</ul>
			}
			articleTitle={thisProject.projectName}
			imgSrc={`../../images/${thisProject.projectImage[0]}.jpg`}
			imgAlt={`${thisProject.projectName} showcase photo`}
			docStyle={styles.oneProjectPage}
		>
			<h3 className='display-4'>
				Completed &emsp;
				<span>
					<Moment date={thisProject.timeOfComplete} format='DD/MM/YYYY' />
				</span>
			</h3>
			<h3 className='display-4'>
				In Focus &emsp; <span>{thisProject.inFocus}</span>
			</h3>
			<div style={{ marginTop: "1rem" }}>
				<a
					href={thisProject.projectLink}
					className={styles.linkWrapper + " secondary"}
				>
					⌞See the prototype
				</a>
			</div>
			{thisProject.projectContent.map((p, i) => (
				<>
					<p key={i} className={styles.paraStyling}>
						{p.paragraph}
					</p>

					{/* If there are bullets array, then loop and show*/}
					{p.bullets &&
						p.bullets.map((b, index) => (
							<ul>
								<li>{b.bullet}</li>
							</ul>
						))}
				</>
			))}
		</Document>
	);
}

export default OneProject;
