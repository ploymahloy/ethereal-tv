import styles from '../styles/Carousel.module.scss';

type CarouselProps = { title: string };

export default function Carousel(props: CarouselProps) {
	const { title } = props;

	return (
		<div className={styles.Carousel}>
			<p className={styles.Carousel_genre}>{title}</p>
			<div className={styles.Carousel_wrapper}>
				<div className={styles.Carousel_title}>
					<a href="#"></a>
				</div>
				<div className={styles.Carousel_title}>
					<a href="#"></a>
				</div>
				<div className={styles.Carousel_title}>
					<a href="#"></a>
				</div>
				<div className={styles.Carousel_title}>
					<a href="#"></a>
				</div>
				<div className={styles.Carousel_title}>
					<a href="#"></a>
				</div>
				<div className={styles.Carousel_title}>
					<a href="#"></a>
				</div>
				<div className={styles.Carousel_title}>
					<a href="#"></a>
				</div>
				<div className={styles.Carousel_title}>
					<a href="#"></a>
				</div>
				<div className={styles.Carousel_title}>
					<a href="#"></a>
				</div>
				<div className={styles.Carousel_title}>
					<a href="#"></a>
				</div>
				<div className={styles.Carousel_title}>
					<a href="#"></a>
				</div>
				<div className={styles.Carousel_title}>
					<a href="#"></a>
				</div>
				<div className={styles.Carousel_title}>
					<a href="#"></a>
				</div>
			</div>
		</div>
	);
}
