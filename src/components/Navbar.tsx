// import React from 'react'
import { BsBell } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
	return (
		<div className={styles.Navbar}>
			<a href="#">
				<FiMenu className={styles.Navbar_icon} />
			</a>
			<p className={styles.Navbar_logo}>Ethereal</p>
      <div>
				<a href="#">
					<BsBell className={styles.Navbar_icon} />
				</a>
				<a href="#">
					<HiOutlineMagnifyingGlass className={styles.Navbar_iconright} />
				</a>
			</div>
		</div>
	);
}
