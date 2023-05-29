import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  
  const menuTextClass = isOpen ? styles.menu_link_label : styles.menu_link_hidden;

	return (
		<div
			className={styles.Sidebar}
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<div className={styles.menu}>
				{menu.map((item, index) => (
					<a key={index} className={styles.menu_link}>
						<span>{item.icon}</span>
						<span className={menuTextClass}>{item.text}</span>
					</a>
				))}
			</div>
		</div>
	);
}
