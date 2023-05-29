import Footer from './Footer';
import FeaturedReleases from './FeaturedReleases';
import styles from '../styles/Main.module.scss';

export default function Main() {
  return (
    <div className={styles.Main}>
      <FeaturedReleases />
      <Footer />
    </div>
  )
}
