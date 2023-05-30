import { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { RxDotFilled } from 'react-icons/rx';

import styles from '../styles/FeaturedReleases.module.scss';

const slides = [
	{
		url: "https://picsum.photos/1100/315?random=6",
		title: 'img',
	},
	{
		url: "https://picsum.photos/1100/315?random=7",
		title: 'img2',
	},
	{
		url: "https://picsum.photos/1100/315?random=8",
		title: 'img3',
	},
];

export default function FeaturedReleases() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isActive, setIsActive] = useState(false);

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	}

	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	}

	const slideStylesWidthBackground = {
		width: '100%',
		height: '100%',
		borderRadius: '10px',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundImage: `url(${slides[currentIndex].url})`,
	}

	const leftArrowClass = isActive ? styles.leftArrow : styles.hidden;
	const rightArrowClass = isActive ? styles.rightArrow : styles.hidden;
	const dotClass = isActive ? styles.dot : styles.hidden;

	return (
		<div
			className={styles.container}
			onMouseEnter={() => setIsActive(true)}
			onMouseLeave={() => setIsActive(false)}
		>
			<div className={styles.slider}>
				<div>
					<div onClick={goToPrevious} className={leftArrowClass}>
						<RiArrowLeftSLine />
					</div>
					<div onClick={goToNext} className={rightArrowClass}>
						<RiArrowRightSLine />
					</div>
				</div>
				<div style={slideStylesWidthBackground}></div>
				<div className={styles.dotsContainer}>
					{slides.map((_slide, slideIndex) => (
						<div
							className={dotClass}
							key={slideIndex}
							onClick={() => goToSlide(slideIndex)}
						>
							<RxDotFilled />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
