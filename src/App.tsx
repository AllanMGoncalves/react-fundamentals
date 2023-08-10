import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';

const post = [
	{
		id: 1,
		author: {
			avatarUrl: 'http://github.com/allancoder.png',
			name: 'Allan Goncalves',
			role: 'UI Designer & Frontend Developer',
		},
		content: [
			{ type: 'paragraph', content: 'Hey everyone! 👋' },
			{
				type: 'paragraph',
				content:
					'I just uploaded another project to my portfolio. It&apos;s a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀',
			},
			{ type: 'link', content: 'allan.coder/doctorcare' },
			{ type: 'tag', content: '#newproject' },
			{ type: 'tag', content: '#nlw' },
			{ type: 'tag', content: '#rocketseat' },
		],
		publishedAt: new Date('2023-08-03 09:51:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl:
				'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=20',
			name: 'Jane Smith',
			role: 'Fontend Developer',
		},
		content: [
			{ type: 'paragraph', content: 'Hey everyone! 👋' },
			{
				type: 'paragraph',
				content:
					'I just uploaded another project to my portfolio. It&apos;s a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀',
			},
			{ type: 'link', content: 'jane.design/doctorcare' },
			{ type: 'tag', content: '#newproject' },
			{ type: 'tag', content: '#nlw' },
			{ type: 'tag', content: '#rocketseat' },
		],
		publishedAt: new Date('2023-08-01 10:49:00'),
	},
];

export function App() {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{post.map(post => {
						return <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />;
					})}
				</main>
			</div>
		</>
	);
}
