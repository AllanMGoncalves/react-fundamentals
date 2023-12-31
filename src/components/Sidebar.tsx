import { PencilSimpleLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
			/>

			<div className={styles.profile}>
				<Avatar src="https://github.com/allancoder.png" />
				<strong>Allan Goncalves</strong>
				<span>Web Developer</span>
			</div>

			<footer>
				<a href="#">
					<PencilSimpleLine size={20} weight="bold" />
					Edit Profile
				</a>
			</footer>
		</aside>
	);
}
