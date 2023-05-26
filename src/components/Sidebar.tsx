// import React from 'react';
import { FaFire, FaGlasses, FaHandHoldingHeart, FaHome } from 'react-icons/fa';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { IoSettingsSharp } from 'react-icons/io5';

import styles from '../styles/Sidebar.module.scss';

const menu = [
	{
		icon: <FaHome />,
		text: 'Home',
	},
	{
		icon: <FaFire />,
		text: 'Trending',
	},
	{
		icon: <BsFillLightningChargeFill />,
		text: 'Live',
	},
	{
		icon: <FaHandHoldingHeart />,
		text: 'Recommended',
	},
	{
		icon: <FaGlasses />,
		text: 'Watch List',
	},
	{
		icon: <IoSettingsSharp />,
		text: 'Settings',
	},
];

export default function Sidebar() {
	return (
		<div className={styles.Sidebar}>
			<div className={styles.top}>
				<div className={styles.profile}>
					<div className={styles.profile_avatar}>JD</div>
					<div className={styles.profile_username}>Jane Doe</div>
				</div>
				<a href="#" className={styles.switch}>
					Switch Profile
				</a>
			</div>
			<div className={styles.menu}>
				{menu.map((item, index) => (
					<a key={index} className={styles.menu_link}>
            <span className={styles.menu_link_icon}>{item.icon}</span>
						<span className={styles.menu_link_text}>{item.text}</span>
					</a>
				))}
			</div>
			<span className={styles.logo}>Ethereal</span>
		</div>
	);
}
