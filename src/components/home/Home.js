import styles from './Home.module.scss';

import { ReactSVG } from 'react-svg';
import VoLogo from '../../assets/vo-logo.svg';

function Home() {
	return (
		<main className={styles.homePage + ' fadeIn'}>
			<ReactSVG
				src={VoLogo}
				beforeInjection={(svg) => {
					// svg.setAttribute("style", "height: 400px");
				}}
				afterInjection={(error, svg) => {
					if (error) {
						console.error(error);
						return;
					}
				}}
			/>
			<h1 className='display-4'>Frontend & React Native developer</h1>
		</main>
	);
}
export default Home;
