import Carousel from './Carousel';
import FeaturedReleases from './FeaturedReleases';
import styles from '../styles/Main.module.scss';

// const carouselTitles = [
//   "Continue watching",
//   "New Releases",
//   "For fans of X"
// ]

export default function Main() {
	return (
		<div className={styles.Main}>
			<FeaturedReleases />
			<Carousel title="Continue Watching" />
			<Carousel title="New Releases" />
			<Carousel title="For Fans of Stranger Things" />
		</div>
	);
}
