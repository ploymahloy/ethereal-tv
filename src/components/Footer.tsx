import styles from '../styles/Footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.Footer}>
			<p className={styles.Footer_logo}>Ethereal</p>
			<div className={styles.Footer_menu}>
				<a href="#">Subscriber Agreement</a>
				<a href="#">Cancellation and Refund Policy</a>
				<a href="#">Privacy Policy</a>
				<a href="#">Children's Online Privacy</a>
				<a href="#">Supported Devices</a>
				<a href="#">About Us</a>
				<a href="#">Contact</a>
			</div>
			<div className={styles.Footer_copyright}>
				&copy; Copyright 2023 Ethereal TV
			</div>
		</footer>
	);
}
