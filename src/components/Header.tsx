import styles from './Header.module.css';

import igniteLogo from '../assets/symbol_ignite.svg';

export function Header() {
	return (
		<header className={styles.header}>
			<img src={igniteLogo} alt="Ignite Logo" />
			<p>Ignite Feed</p>
		</header>
	);
}
