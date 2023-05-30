import styles from '../styles/Carousel.module.scss';

type CarouselProps = { title: string };

export default function Carousel(props: CarouselProps) {
	const { title } = props;

	return (
		<div className={styles.Carousel}>
			<p className={styles.Carousel_genre}>{title}</p>
			<div className={styles.Carousel_wrapper}>
				<div className={styles.Carousel_title} tabIndex={1}>
					<a href="#">
						<img src="https://picsum.photos/300/125?random=1" />
					</a>
				</div>
				<div className={styles.Carousel_title} tabIndex={2}>
					<a href="#">
						<img src="https://picsum.photos/300/125?random=2" />
					</a>
				</div>
				<div className={styles.Carousel_title} tabIndex={3}>
					<a href="#">
						<img src="https://picsum.photos/300/125?random=3" />
					</a>
				</div>
				<div className={styles.Carousel_title} tabIndex={4}>
					<a href="#">
						<img src="https://picsum.photos/300/125?random=4" />
					</a>
				</div>
				<div className={styles.Carousel_title} tabIndex={5}>
					<a href="#">
						<img src="https://picsum.photos/300/125?random=5" />
					</a>
				</div>
				<div className={styles.Carousel_title} tabIndex={6}>
					<a href="#">
						<img src="https://picsum.photos/300/125?random=6" />
					</a>
				</div>
				<div className={styles.Carousel_title} tabIndex={7}>
					<a href="#">
						<img src="https://picsum.photos/300/125?random=7" />
					</a>
				</div>
				<div className={styles.Carousel_title} tabIndex={8}>
					<a href="#">
						<img src="https://picsum.photos/300/125?random=8" />
					</a>
				</div>
				<div className={styles.Carousel_title} tabIndex={9}>
					<a href="#">
						<img src="https://picsum.photos/300/125?random=9" />
					</a>
				</div>
				<div className={styles.Carousel_title} tabIndex={10}>
					<a href="#">
						<img src="https://picsum.photos/300/125?random=10" />
					</a>
				</div>
				<div className={styles.Carousel_title} tabIndex={11}>
					<a href="#">
						<img src="https://picsum.photos/300/125?random=11" />
					</a>
				</div>
				<div className={styles.Carousel_title} tabIndex={12}>
					<a href="#">
						<img src="https://picsum.photos/300/125?random=12" />
					</a>
				</div>
				<div className={styles.Carousel_title} tabIndex={13}>
					<a href="#">
						<img src="https://picsum.photos/300/125?random=13" />
					</a>
				</div>
			</div>
		</div>
	);
}
