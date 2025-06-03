import styles from './About.module.scss';

import { useMediaQuery } from 'react-responsive';

import Document from '../document/Document';
import Profile from '../../images/profile-pic.webp';

function About() {
	const isSmallestScreen = useMediaQuery({ query: '(max-width: 340px)' });
	return (
		<Document
			title={
				<h1 className={isSmallestScreen ? 'display-2 ' : 'display-1 '}>
					About me
				</h1>
			}
			titleStyle={{ marginLeft: '49px' }}
			articleTitle='Hi,'
			imgSrc={Profile}
			imgAlt='Rachel Vo profile pic'
			imgStyles={styles.blackWhite}
			docStyle={styles.aboutPage}>
			<p>
				I’m Rachel — a frontend developer and digital consultant at Pentia
				based in Copenhagen. I specialize in building accessible,
				performant, and scalable user interfaces using modern technologies
				like React Native, React, Typescript, Sass/Scss, Tailwind CSS and
				more.
			</p>
			<br />
			<p>
				As a Certified Professional in Accessibility Core Competencies
				(CPACC), I care deeply about inclusive design and have helped
				clients in finance and the public sector meet WCAG 2.1 AA standards.
			</p>
			<br />
			<p>
				My professional work spans large-scale websites, design system
				contributions, accessibility audits, and performance tuning — often
				in close partnership with client teams. I focus on delivering
				high-quality code, thoughtful UX, and clear documentation that helps
				teams move faster with confidence.
			</p>
			<br />
			<p>
				With a solid foundation in React Native, I’ve grown increasingly
				interested in mobile development and am currently expanding my
				skills into Swift — while also exploring how to bring inclusive
				design thinking earlier into the development process.
			</p>
			<br />
			<p>
				When I’m not coding, I’m probably cycling, doing barre or pilates,
				or deep-diving into music and sound quality.
			</p>
		</Document>
	);
}
export default About;
